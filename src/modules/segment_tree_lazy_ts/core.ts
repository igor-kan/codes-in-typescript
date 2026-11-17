export class LazySegTree {
  private readonly tree: Float64Array;
  private readonly lazy: Float64Array;
  constructor(private readonly n: number) {
    this.tree = new Float64Array(4 * n + 4);
    this.lazy = new Float64Array(4 * n + 4);
  }
  private push(v: number, tl: number, tr: number): void {
    const lz = this.lazy[v];
    if (lz !== 0) {
      const tm = (tl + tr) >> 1;
      this.tree[2 * v] += lz * (tm - tl + 1);
      this.lazy[2 * v] += lz;
      this.tree[2 * v + 1] += lz * (tr - tm);
      this.lazy[2 * v + 1] += lz;
      this.lazy[v] = 0;
    }
  }
  public add(l: number, r: number, delta: number): void { this.addRec(1, 0, this.n - 1, l, r, delta); }
  private addRec(v: number, tl: number, tr: number, l: number, r: number, val: number): void {
    if (l > r) return;
    if (l === tl && r === tr) { this.tree[v] += val * (tr - tl + 1); this.lazy[v] += val; return; }
    this.push(v, tl, tr);
    const tm = (tl + tr) >> 1;
    this.addRec(2 * v, tl, tm, l, Math.min(r, tm), val);
    this.addRec(2 * v + 1, tm + 1, tr, Math.max(l, tm + 1), r, val);
    this.tree[v] = this.tree[2 * v] + this.tree[2 * v + 1];
  }
  public sum(l: number, r: number): number { return this.sumRec(1, 0, this.n - 1, l, r); }
  private sumRec(v: number, tl: number, tr: number, l: number, r: number): number {
    if (l > r) return 0;
    if (l === tl && r === tr) return this.tree[v];
    this.push(v, tl, tr);
    const tm = (tl + tr) >> 1;
    return this.sumRec(2 * v, tl, tm, l, Math.min(r, tm)) + this.sumRec(2 * v + 1, tm + 1, tr, Math.max(l, tm + 1), r);
  }
}
