import { DualFenwickTree } from "./core.js";
import { RangeUpdateOp } from "./types.js";

export function applyBatchRangeOps(n: number, ops: readonly RangeUpdateOp[]): DualFenwickTree {
  const bit = new DualFenwickTree(n);
  for (const op of ops) {
    bit.addRange(op.lo, op.hi, op.delta);
  }
  return bit;
}
