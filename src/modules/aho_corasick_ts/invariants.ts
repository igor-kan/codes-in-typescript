import { AhoError, AhoErrorCode } from "./errors.js";
import { AcMatch } from "./types.js";

export function verifyExactSubstrings(text: string, matches: readonly AcMatch[]): void {
  for (const m of matches) {
    if (text.slice(m.startOffset, m.startOffset + m.pattern.length) !== m.pattern) {
      throw new AhoError(AhoErrorCode.INVARIANT_VIOLATION, `bad match ${m.pattern} at ${m.startOffset}`);
    }
  }
}
