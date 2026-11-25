import { SkipEntry } from "./types.js";

class SkipNode {
  readonly next: Array<SkipNode | null>;
  constructor(public readonly key: number, public value: string, level: number) {
    this.next = new Array<SkipNode | null>(level).fill(null);
  }
}

export class SkipListMap {
  private static readonly MAX_LVL = 12;
  private readonly head = new SkipNode(-Infinity, "", SkipListMap.MAX_LVL);
  private level = 1;

  private pickLevel(key: number): number {
    let h = (Math.imul(key ^ 0x9e3779b9, 0x85ebca6b) >>> 0) | 1;
    let lvl = 1;
    while ((h & 1) === 0 && lvl < SkipListMap.MAX_LVL) { h >>>= 1; lvl++; }
    return lvl;
  }

  set(key: number, value: string): void {
    const upd = new Array<SkipNode>(SkipListMap.MAX_LVL).fill(this.head);
    let cur = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
      while (cur.next[i] && cur.next[i]!.key < key) cur = cur.next[i]!;
      upd[i] = cur;
    }
    const nxt = cur.next[0];
    if (nxt && nxt.key === key) { nxt.value = value; return; }
    const lvl = this.pickLevel(key);
    if (lvl > this.level) this.level = lvl;
    const nd = new SkipNode(key, value, lvl);
    for (let i = 0; i < lvl; i++) {
      nd.next[i] = upd[i].next[i];
      upd[i].next[i] = nd;
    }
  }

  get(key: number): string | undefined {
    let cur = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
      while (cur.next[i] && cur.next[i]!.key < key) cur = cur.next[i]!;
    }
    const cand = cur.next[0];
    return cand && cand.key === key ? cand.value : undefined;
  }

  entries(): SkipEntry[] {
    const res: SkipEntry[] = [];
    let cur = this.head.next[0];
    while (cur) { res.push({ key: cur.key, value: cur.value }); cur = cur.next[0]; }
    return res;
  }
}
