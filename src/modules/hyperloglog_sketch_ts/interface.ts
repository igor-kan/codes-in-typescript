import { HllTsError, HllTsErrorCode } from "./errors.js";

export function validatePrecision(p: number): void {
  if (!Number.isInteger(p) || p < 4 || p > 14) {
    throw new HllTsError(HllTsErrorCode.INVALID_INPUT, "precision p must be in [4, 14]");
  }
}
