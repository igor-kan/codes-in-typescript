import { AhoError, AhoErrorCode } from "./errors.js";

export function validatePatterns(patterns: readonly string[]): void {
  if (patterns.length === 0) {
    throw new AhoError(AhoErrorCode.EMPTY_INPUT, "at least one pattern required");
  }
  for (const p of patterns) {
    if (p.length === 0) throw new AhoError(AhoErrorCode.INVALID_INPUT, "empty pattern disallowed");
  }
}
