import { SuffixIdxError, SuffixIdxErrorCode } from "./errors.js";
import { SuffixIndex } from "./types.js";

export function verifySuffixArrayOrderAndLcp(idx: SuffixIndex): void {
  const n = idx.text.length;
  const seen = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    const p = idx.sa[i];
    if (p < 0 || p >= n || seen[p] === 1) {
      throw new SuffixIdxError(SuffixIdxErrorCode.INVARIANT_VIOLATION, "SA is not a permutation");
    }
    seen[p] = 1;
    if (i > 0) {
      const a = idx.text.slice(idx.sa[i - 1]);
      const b = idx.text.slice(p);
      if (a >= b) {
        throw new SuffixIdxError(SuffixIdxErrorCode.INVARIANT_VIOLATION, "SA not sorted");
      }
      let common = 0;
      while (common < a.length && common < b.length && a[common] === b[common]) common++;
      if (common !== idx.lcp[i]) {
        throw new SuffixIdxError(SuffixIdxErrorCode.INVARIANT_VIOLATION, "Kasai LCP mismatch");
      }
    }
  }
}
