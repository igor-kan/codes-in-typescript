import { FenwickError, FenwickErrorCode } from "./errors.js";
import { DualFenwickContract } from "./interface.js";

export class DualFenwickTree implements DualFenwickContract {
  public readonly n: number;
  private readonly b1: Float64Array;
  private readonly b2: Float64Array;

  constructor(n: number) {
    if (!Number.isInteger(n) || n <= 0) {
      throw new FenwickError(FenwickErrorCode.INVALID_INPUT, "size must be positive integer");
    }
    this.n = n;
    this.b1 = new Float64Array(n + 1);
    this.b2 = new Float64Array(n + 1);
  }

  private addInternal(bit: Float64Array, idx1: number, delta: number): void {
    for (let i = idx1; i <= this.n; i += i & -i) {
      bit[i] += delta;
    }
  }

  private queryInternal(bit: Float64Array, idx1: number): number {
    let s = 0;
    for (let i = idx1; i > 0; i -= i & -i) {
      s += bit[i];
    }
    return s;
  }

  public addRange(lo: number, hi: number, delta: number): void {
    if (lo < 0 || hi >= this.n || lo > hi) {
      throw new FenwickError(FenwickErrorCode.OUT_OF_BOUNDS, "range out of bounds");
    }
    const l1 = lo + 1;
    const r1 = hi + 1;
    this.addInternal(this.b1, l1, delta);
    this.addInternal(this.b1, r1 + 1, -delta);
    this.addInternal(this.b2, l1, delta * (l1 - 1));
    this.addInternal(this.b2, r1 + 1, -delta * r1);
  }

  public prefixSum(idx: number): number {
    if (idx < 0 || idx >= this.n) {
      throw new FenwickError(FenwickErrorCode.OUT_OF_BOUNDS, "index out of bounds");
    }
    const i1 = idx + 1;
    return this.queryInternal(this.b1, i1) * i1 - this.queryInternal(this.b2, i1);
  }

  public rangeSum(lo: number, hi: number): number {
    if (lo < 0 || hi >= this.n || lo > hi) {
      throw new FenwickError(FenwickErrorCode.OUT_OF_BOUNDS, "range out of bounds");
    }
    return this.prefixSum(hi) - (lo > 0 ? this.prefixSum(lo - 1) : 0);
  }
}

export class PointFenwick {
  public readonly n: number;
  private readonly tree: Float64Array;

  constructor(n: number) {
    this.n = n;
    this.tree = new Float64Array(n + 1);
  }

  public add(idx: number, delta: number): void {
    for (let i = idx + 1; i <= this.n; i += i & -i) this.tree[i] += delta;
  }

  public lowerBound(target: number): number {
    let pos = 0;
    let sum = 0;
    let bitMask = 1;
    while ((bitMask << 1) <= this.n) bitMask <<= 1;
    for (; bitMask > 0; bitMask >>= 1) {
      const nxt = pos + bitMask;
      if (nxt <= this.n && sum + this.tree[nxt] < target) {
        pos = nxt;
        sum += this.tree[nxt];
      }
    }
    return pos;
  }
}
