export class FenwickTree {
  private readonly bit: Float64Array;
  private readonly n: number;

  constructor(n: number) {
    this.n = n;
    this.bit = new Float64Array(n + 1);
  }

  add(idx: number, delta: number): void {
    for (let i = idx + 1; i <= this.n; i += i & -i) this.bit[i] += delta;
  }

  prefixSum(idx: number): number {
    let s = 0;
    for (let i = idx + 1; i > 0; i -= i & -i) s += this.bit[i];
    return s;
  }

  rangeSum(l: number, r: number): number {
    return this.prefixSum(r) - (l > 0 ? this.prefixSum(l - 1) : 0);
  }
}
