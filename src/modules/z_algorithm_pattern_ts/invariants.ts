import { computeZArray } from "./core.js";
import { ZSearchError, ZSearchErrorCode } from "./errors.js";

export function verifyZArrayExact(s: string): void {
  const z = computeZArray(s);
  for (let i = 0; i < s.length; i++) {
    let k = 0;
    while (i + k < s.length && s[k] === s[i + k]) k++;
    if (z[i] !== k) {
      throw new ZSearchError(ZSearchErrorCode.INVARIANT_VIOLATION, `Z[${i}] expected ${k} got ${z[i]}`);
    }
  }
}
