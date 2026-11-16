import { ZSearchError, ZSearchErrorCode } from "./errors.js";

export function validateMatcherInputs(text: string, pattern: string): void {
  if (pattern.length === 0) {
    throw new ZSearchError(ZSearchErrorCode.EMPTY_INPUT, "pattern cannot be empty");
  }
  if (pattern.includes("\u0000") || text.includes("\u0000")) {
    throw new ZSearchError(ZSearchErrorCode.INVALID_INPUT, "null sentinel forbidden in input");
  }
}
