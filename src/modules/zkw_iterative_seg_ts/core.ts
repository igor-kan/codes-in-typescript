export class ZkwSegTree {
  private readonly base: number;
  private readonly tree: Float64Array;
  constructor(n: number) {
    let b = 1;
    while (b < n + 2) b <<= 1;
    this.base = b;
    this.tree = new Float64Array(2 * b);
  }
  public set(idx: number, val: number): void {
    let p = idx + 1 + this.base;
    this.tree[p] = val;
    for (p >>>= 1; p > 0; p >>>= 1) this.tree[p] = this.tree[p << 1] + this.tree[(p << 1) | 1];
  }
  public query(l: number, r: number): number {
    let ans = 0;
    for (let s = l + this.base, t = r + 2 + this.base; (s ^ t ^ 1) !== 0; s >>>= 1, t >>>= 1) {
      if ((~s & 1) !== 0) ans += this.tree[s ^ 1];
      if (( t & 1) !== 0) ans += this.tree[t ^ 1];
    }
    return ans;
  }
}
