import type { BwtBlock } from "./types.js";

export function bwtForward(s: string): BwtBlock {
  const n = s.length;
  if (n === 0) return { lastCol: "", primaryIndex: 0 };
  const rots = Array.from({ length: n }, (_, i) => i);
  rots.sort((a, b) => {
    for (let k = 0; k < n; k++) {
      const ca = s[(a + k) % n];
      const cb = s[(b + k) % n];
      if (ca !== cb) return ca < cb ? -1 : 1;
    }
    return 0;
  });
  let out = "";
  let primaryIndex = 0;
  for (let i = 0; i < n; i++) {
    const start = rots[i];
    if (start === 0) primaryIndex = i;
    out += s[(start + n - 1) % n];
  }
  return { lastCol: out, primaryIndex };
}

export function bwtInverse(blk: BwtBlock): string {
  const n = blk.lastCol.length;
  if (n === 0) return "";
  const ranked = Array.from({ length: n }, (_, i) => ({ ch: blk.lastCol[i], idx: i }));
  ranked.sort((a, b) => (a.ch === b.ch ? a.idx - b.idx : a.ch < b.ch ? -1 : 1));
  let cur = blk.primaryIndex;
  let res = "";
  for (let i = 0; i < n; i++) {
    res += ranked[cur].ch;
    cur = ranked[cur].idx;
  }
  return res;
}
