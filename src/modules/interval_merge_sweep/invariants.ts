import { totalSpanLength } from "./fast_path.js";
import { IntervalError, IntervalErrorCode } from "./errors.js";
import { Span } from "./types.js";

export function verifySubtractionConservation(a: readonly Span[], diff: readonly Span[], cutRemoved: readonly Span[]): void {
  if (totalSpanLength(diff) > totalSpanLength(a) || totalSpanLength(cutRemoved) > totalSpanLength(a)) {
    throw new IntervalError(IntervalErrorCode.INVARIANT_VIOLATION, "subspan exceeds parent span length");
  }
}
