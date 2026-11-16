import { RandomizedTreap } from "./core.js";
import { TreapError, TreapErrorCode } from "./errors.js";

export function validateKthQuery(treap: RandomizedTreap, k: number): void {
  if (!Number.isInteger(k) || k < 0 || k >= treap.size()) {
    throw new TreapError(TreapErrorCode.OUT_OF_BOUNDS, "order index out of bounds");
  }
}
