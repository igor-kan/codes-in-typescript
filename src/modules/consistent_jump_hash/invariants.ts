import { JumpHashError, JumpHashErrorCode } from "./errors.js";
import { jumpConsistentHash } from "./core.js";

export function verifyMonotonicity(oldN: number, newN: number, keys: readonly bigint[]): void {
  for (const k of keys) {
    const a = jumpConsistentHash(k, oldN);
    const b = jumpConsistentHash(k, newN);
    if (b >= newN || b < 0) {
      throw new JumpHashError(JumpHashErrorCode.INVARIANT_VIOLATION, "bucket out of bounds");
    }
    if (newN > oldN && a !== b && b < oldN) {
      throw new JumpHashError(JumpHashErrorCode.INVARIANT_VIOLATION, "key moved into pre-existing shard");
    }
  }
}
