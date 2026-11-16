export interface RangeUpdateOp {
  readonly lo: number;
  readonly hi: number;
  readonly delta: number;
}

export interface FenwickSnapshot {
  readonly length: number;
  readonly totalSum: number;
}
