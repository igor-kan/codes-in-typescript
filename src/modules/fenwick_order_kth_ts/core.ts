export class OrderFenwick {
  private readonly bit: Int32Array;
  constructor(private readonly n: number) {
    this.bit = new Int32Array(n + 1);
  }
  public add(idx: number, delta: number): void {
    for (let i = idx + 1; i <= this.n; i += i & -i) this.bit[i] += delta;
  }
  public kth(kIn: number): number {
    let k = kIn, pos = 0, pw = 1;
    while ((pw << 1) <= this.n) pw <<= 1;
    for (; pw > 0; pw >>>= 1) {
      if (pos + pw <= this.n && this.bit[pos + pw] < k) {
        pos += pw;
        k -= this.bit[pos];
      }
    }
    return pos;
  }
}
