import { RateLimitError, RateLimitErrorCode } from "./errors.js";

export function assertNonNegativeTimestamp(nowMs: number, prevMs: number): void {
  if (nowMs < prevMs) {
    throw new RateLimitError(RateLimitErrorCode.INVARIANT_VIOLATION, "clock regressed");
  }
}
