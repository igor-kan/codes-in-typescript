import { DualFenwickTree } from "./core.js";
import { FenwickError, FenwickErrorCode } from "./errors.js";
import { RangeUpdateOp } from "./types.js";

export function verifyAgainstArrayOracle(n: number, ops: readonly RangeUpdateOp[]): void {
  const bit = new DualFenwickTree(n);
  const arr = new Float64Array(n);
  for (const op of ops) {
    bit.addRange(op.lo, op.hi, op.delta);
    for (let i = op.lo; i <= op.hi; i++) arr[i] += op.delta;
  }
  for (let l = 0; l < n; l++) {
    let run = 0;
    for (let r = l; r < n; r++) {
      run += arr[r];
      if (Math.abs(bit.rangeSum(l, r) - run) > 1e-6) {
        throw new FenwickError(FenwickErrorCode.INVARIANT_VIOLATION, `mismatch on [${l}, ${r}]`);
      }
    }
  }
}
