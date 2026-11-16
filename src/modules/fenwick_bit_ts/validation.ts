import { FenwickError, FenwickErrorCode } from "./errors.js";
import { RangeUpdateOp } from "./types.js";

export function validateRangeOps(n: number, ops: readonly RangeUpdateOp[]): void {
  if (!Number.isInteger(n) || n <= 0) {
    throw new FenwickError(FenwickErrorCode.INVALID_INPUT, "invalid tree size");
  }
  for (const op of ops) {
    if (op.lo < 0 || op.hi >= n || op.lo > op.hi || !Number.isFinite(op.delta)) {
      throw new FenwickError(FenwickErrorCode.OUT_OF_BOUNDS, "invalid range update op");
    }
  }
}
