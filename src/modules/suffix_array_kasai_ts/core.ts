import { SuffixIdxError, SuffixIdxErrorCode } from "./errors.js";
import { SuffixIndex } from "./types.js";

export function buildSuffixArray(text: string): SuffixIndex {
  if (text.length === 0) {
    throw new SuffixIdxError(SuffixIdxErrorCode.EMPTY_INPUT, "text cannot be empty");
  }
  const n = text.length;
  const sa = new Int32Array(n);
  let rank = new Int32Array(n);
  let tmp = new Int32Array(n);
  for (let i = 0; i < n; i++) {
    sa[i] = i;
    rank[i] = text.charCodeAt(i);
  }
  for (let k = 1; k < n; k <<= 1) {
    const arr = Array.from(sa);
    arr.sort((a, b) => {
      if (rank[a] !== rank[b]) return rank[a] - rank[b];
      const ra = a + k < n ? rank[a + k] : -1;
      const rb = b + k < n ? rank[b + k] : -1;
      return ra - rb;
    });
    for (let i = 0; i < n; i++) sa[i] = arr[i];
    tmp[sa[0]] = 0;
    for (let i = 1; i < n; i++) {
      const a = sa[i - 1];
      const b = sa[i];
      const sameFirst = rank[a] === rank[b];
      const ra = a + k < n ? rank[a + k] : -1;
      const rb = b + k < n ? rank[b + k] : -1;
      tmp[b] = tmp[a] + (sameFirst && ra === rb ? 0 : 1);
    }
    const swap = rank; rank = tmp; tmp = swap;
    if (rank[sa[n - 1]] === n - 1) break;
  }

  const inv = new Int32Array(n);
  for (let i = 0; i < n; i++) inv[sa[i]] = i;
  const lcp = new Int32Array(n);
  let h = 0;
  for (let i = 0; i < n; i++) {
    if (inv[i] > 0) {
      const j = sa[inv[i] - 1];
      while (i + h < n && j + h < n && text.charCodeAt(i + h) === text.charCodeAt(j + h)) {
        h++;
      }
      lcp[inv[i]] = h;
      if (h > 0) h--;
    }
  }
  return { text, sa, lcp };
}

export function findFirstGe(idx: SuffixIndex, pat: string): number {
  let lo = 0;
  let hi = idx.sa.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    const sub = idx.text.slice(idx.sa[mid], idx.sa[mid] + pat.length);
    if (sub < pat) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
