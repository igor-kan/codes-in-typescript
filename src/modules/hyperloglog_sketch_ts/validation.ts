import { HyperLogLogTs } from "./core.js";
import { HllTsError, HllTsErrorCode } from "./errors.js";

export function verifyRegisterLength(h: HyperLogLogTs): void {
  if (h.registers.length !== 1 << h.precision) {
    throw new HllTsError(HllTsErrorCode.INVARIANT_VIOLATION, "corrupt register size");
  }
}
