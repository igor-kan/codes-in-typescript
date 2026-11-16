import { SuffixIdxError, SuffixIdxErrorCode } from "./errors.js";

export function validateNonEmpty(s: string): void {
  if (s.length === 0) {
    throw new SuffixIdxError(SuffixIdxErrorCode.EMPTY_INPUT, "string input must not be empty");
  }
}
