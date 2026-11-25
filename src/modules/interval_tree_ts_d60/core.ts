import { Interval } from "./types.js";

class ITNode {
  maxEnd: number;
  left: ITNode | null = null;
  right: ITNode | null = null;
  constructor(public readonly iv: Interval) {
    this.maxEnd = iv.hi;
  }
}

export class IntervalTree {
  private root: ITNode | null = null;
  insert(iv: Interval): void { this.root = this.ins(this.root, iv); }
  private ins(nd: ITNode | null, iv: Interval): ITNode {
    if (!nd) return new ITNode(iv);
    if (iv.lo < nd.iv.lo) nd.left = this.ins(nd.left, iv);
    else nd.right = this.ins(nd.right, iv);
    nd.maxEnd = Math.max(nd.maxEnd, iv.hi);
    return nd;
  }
  overlaps(qLo: number, qHi: number): Interval[] {
    const out: Interval[] = [];
    const dfs = (nd: ITNode | null): void => {
      if (!nd || nd.maxEnd < qLo) return;
      if (nd.left && nd.left.maxEnd >= qLo) dfs(nd.left);
      if (nd.iv.lo <= qHi && nd.iv.hi >= qLo) out.push(nd.iv);
      if (nd.iv.lo <= qHi) dfs(nd.right);
    };
    dfs(this.root);
    return out;
  }
}
