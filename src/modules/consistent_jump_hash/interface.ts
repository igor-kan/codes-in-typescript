import { JumpHashError, JumpHashErrorCode } from "./errors.js";
import { JumpRouterConfig } from "./types.js";

export function createJumpRouter(numBuckets: number, seed: bigint = 0n): JumpRouterConfig {
  if (!Number.isInteger(numBuckets) || numBuckets <= 0) {
    throw new JumpHashError(JumpHashErrorCode.INVALID_INPUT, "numBuckets must be a positive integer");
  }
  return { numBuckets, seed };
}
