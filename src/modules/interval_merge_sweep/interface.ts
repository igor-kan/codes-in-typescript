import { IntervalError, IntervalErrorCode } from "./errors.js";
import { Span } from "./types.js";

export function validateSpans(spans: readonly Span[]): void {
  for (const s of spans) {
    if (!Number.isFinite(s.start) || !Number.isFinite(s.end) || s.start >= s.end) {
      throw new IntervalError(IntervalErrorCode.INVALID_INPUT, "span must have finite start < end");
    }
  }
}
