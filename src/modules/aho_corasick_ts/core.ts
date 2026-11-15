import { AcMatch, AcNode } from "./types.js";

export class AhoCorasickAutomaton {
  public readonly nodes: AcNode[] = [];
  public readonly patterns: readonly string[];

  constructor(patterns: readonly string[]) {
    this.patterns = [...patterns];
    this.nodes.push({ next: new Map(), fail: 0, dictLink: 0, outputs: [] });
    for (let pid = 0; pid < patterns.length; pid++) {
      let cur = 0;
      for (const ch of patterns[pid]) {
        let nxt = this.nodes[cur].next.get(ch);
        if (nxt === undefined) {
          nxt = this.nodes.length;
          this.nodes.push({ next: new Map(), fail: 0, dictLink: 0, outputs: [] });
          this.nodes[cur].next.set(ch, nxt);
        }
        cur = nxt;
      }
      this.nodes[cur].outputs.push(pid);
    }
    this.buildFailureLinks();
  }

  private buildFailureLinks(): void {
    const queue: number[] = [];
    for (const [, child] of this.nodes[0].next) {
      this.nodes[child].fail = 0;
      this.nodes[child].dictLink = 0;
      queue.push(child);
    }
    let head = 0;
    while (head < queue.length) {
      const u = queue[head++];
      for (const [ch, v] of this.nodes[u].next) {
        let f = this.nodes[u].fail;
        while (f !== 0 && !this.nodes[f].next.has(ch)) {
          f = this.nodes[f].fail;
        }
        const failTarget = this.nodes[f].next.get(ch) ?? 0;
        this.nodes[v].fail = failTarget;
        this.nodes[v].dictLink = this.nodes[failTarget].outputs.length > 0
          ? failTarget
          : this.nodes[failTarget].dictLink;
        queue.push(v);
      }
    }
  }

  public search(text: string): AcMatch[] {
    const matches: AcMatch[] = [];
    let state = 0;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      while (state !== 0 && !this.nodes[state].next.has(ch)) {
        state = this.nodes[state].fail;
      }
      state = this.nodes[state].next.get(ch) ?? 0;
      let cur = this.nodes[state].outputs.length > 0 ? state : this.nodes[state].dictLink;
      while (cur !== 0) {
        for (const pid of this.nodes[cur].outputs) {
          const pat = this.patterns[pid];
          matches.push({ patternIndex: pid, startOffset: i - pat.length + 1, pattern: pat });
        }
        cur = this.nodes[cur].dictLink;
      }
    }
    return matches;
  }
}
