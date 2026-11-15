import { TokenBucket } from "./core.js";
import { RateLimitError, RateLimitErrorCode } from "./errors.js";

export function verifyTokenBounds(bucket: TokenBucket, capacity: number): void {
  const tok = bucket.snapshotTokens();
  if (tok < -1e-12 || tok > capacity + 1e-12) {
    throw new RateLimitError(RateLimitErrorCode.INVARIANT_VIOLATION, `token balance ${tok} outside [0, ${capacity}]`);
  }
}
