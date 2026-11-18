import { EerNode } from "./types.js";

export class Eertree {
  private readonly nodes: EerNode[] = [];
  private suff = 1;
  constructor(private readonly s: string) {
    this.nodes.push({ len: -1, link: 0, next: new Int32Array(26).fill(-1) });
    this.nodes.push({ len: 0, link: 0, next: new Int32Array(26).fill(-1) });
    for (let i = 0; i < s.length; i++) this.addPos(i);
  }
  private addPos(pos: number): void {
    let cur = this.suff;
    const c = this.s.charCodeAt(pos) - 97;
    while (true) {
      const l = this.nodes[cur].len;
      if (pos - 1 - l >= 0 && this.s[pos - 1 - l] === this.s[pos]) break;
      cur = this.nodes[cur].link;
    }
    if (this.nodes[cur].next[c] !== -1) {
      this.suff = this.nodes[cur].next[c];
      return;
    }
    const nw = this.nodes.length;
    const nwLen = this.nodes[cur].len + 2;
    this.nodes.push({ len: nwLen, link: 1, next: new Int32Array(26).fill(-1) });
    this.nodes[cur].next[c] = nw;
    this.suff = nw;
    if (nwLen === 1) return;
    while (true) {
      cur = this.nodes[cur].link;
      const l = this.nodes[cur].len;
      if (pos - 1 - l >= 0 && this.s[pos - 1 - l] === this.s[pos]) {
        this.nodes[nw].link = this.nodes[cur].next[c];
        break;
      }
    }
  }
  public distinctCount(): number {
    return this.nodes.length - 2;
  }
}
