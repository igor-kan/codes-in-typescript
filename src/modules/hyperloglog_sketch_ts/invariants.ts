import { HyperLogLogTs } from "./core.js";
import { HllTsError, HllTsErrorCode } from "./errors.js";

export function verifySelfMergeIdempotent(h: HyperLogLogTs): void {
  const snap = h.registers.slice();
  h.merge(h);
  for (let i = 0; i < snap.length; i++) {
    if (snap[i] !== h.registers[i]) {
      throw new HllTsError(HllTsErrorCode.INVARIANT_VIOLATION, "self-merge altered registers");
    }
  }
}
