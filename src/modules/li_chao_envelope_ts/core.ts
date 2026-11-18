import { AffineLine } from "./types.js";

export class LiChaoTree {
  private readonly tree: AffineLine[];
  constructor(private readonly dom: number) {
    this.tree = Array.from({ length: 4 * dom + 4 }, () => ({ m: 0, b: 1e15 }));
  }
  private eval(ln: AffineLine, x: number): number {
    return ln.m * x + ln.b;
  }
  public addLine(m: number, b: number): void {
    this.ins(1, 0, this.dom - 1, { m, b });
  }
  private ins(v: number, l: number, r: number, nw: AffineLine): void {
    const mid = (l + r) >> 1;
    const lb = this.eval(nw, l) < this.eval(this.tree[v], l);
    const mb = this.eval(nw, mid) < this.eval(this.tree[v], mid);
    if (mb) {
      const tmp = this.tree[v];
      this.tree[v] = nw;
      nw = tmp;
    }
    if (l === r) return;
    if (lb !== mb) this.ins(v << 1, l, mid, nw);
    else this.ins((v << 1) | 1, mid + 1, r, nw);
  }
  public query(x: number): number {
    let v = 1, l = 0, r = this.dom - 1, best = 1e15;
    while (true) {
      best = Math.min(best, this.eval(this.tree[v], x));
      if (l === r) return best;
      const mid = (l + r) >> 1;
      if (x <= mid) { v <<= 1; r = mid; }
      else { v = (v << 1) | 1; l = mid + 1; }
    }
  }
}
