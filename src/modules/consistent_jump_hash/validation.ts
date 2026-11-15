import { JumpHashError, JumpHashErrorCode } from "./errors.js";

export function validateBucketResize(oldN: number, newN: number): void {
  if (!Number.isInteger(oldN) || !Number.isInteger(newN) || oldN <= 0 || newN <= 0) {
    throw new JumpHashError(JumpHashErrorCode.OUT_OF_BOUNDS, "bucket counts must be positive integers");
  }
}
