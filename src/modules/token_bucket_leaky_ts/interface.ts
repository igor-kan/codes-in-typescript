import { RateLimitError, RateLimitErrorCode } from "./errors.js";
import { BucketPolicy } from "./types.js";

export function validatePolicy(p: BucketPolicy): void {
  if (p.capacity <= 0 || p.refillPerSec <= 0 || !Number.isFinite(p.capacity) || !Number.isFinite(p.refillPerSec)) {
    throw new RateLimitError(RateLimitErrorCode.INVALID_INPUT, "capacity and refillPerSec must be > 0");
  }
}
