import { IntervalError, IntervalErrorCode } from "./errors.js";
import { Span } from "./types.js";

export function assertDisjointSorted(spans: readonly Span[]): void {
  for (let i = 1; i < spans.length; i++) {
    if (spans[i - 1].end >= spans[i].start) {
      throw new IntervalError(IntervalErrorCode.INVARIANT_VIOLATION, "spans overlap or touch");
    }
  }
}
