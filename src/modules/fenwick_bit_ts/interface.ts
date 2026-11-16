export interface DualFenwickContract {
  addRange(lo: number, hi: number, delta: number): void;
  prefixSum(idx: number): number;
  rangeSum(lo: number, hi: number): number;
}
