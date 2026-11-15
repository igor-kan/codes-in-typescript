import { OccupancyPeak, Span } from "./types.js";

export function mergeSpans(spans: readonly Span[]): Span[] {
  if (spans.length === 0) return [];
  const sorted = [...spans].sort((a, b) => a.start - b.start || a.end - b.end);
  const out: Span[] = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const cur = sorted[i];
    const last = out[out.length - 1];
    if (cur.start <= last.end) {
      out[out.length - 1] = { start: last.start, end: Math.max(last.end, cur.end) };
    } else {
      out.push(cur);
    }
  }
  return out;
}

export function subtractSpans(base: readonly Span[], cuts: readonly Span[]): Span[] {
  const mBase = mergeSpans(base);
  const mCuts = mergeSpans(cuts);
  const res: Span[] = [];
  let ci = 0;
  for (const b of mBase) {
    let curStart = b.start;
    while (ci < mCuts.length && mCuts[ci].end <= curStart) ci++;
    let j = ci;
    while (j < mCuts.length && mCuts[j].start < b.end) {
      if (mCuts[j].start > curStart) {
        res.push({ start: curStart, end: mCuts[j].start });
      }
      curStart = Math.max(curStart, mCuts[j].end);
      if (curStart >= b.end) break;
      j++;
    }
    if (curStart < b.end) {
      res.push({ start: curStart, end: b.end });
    }
  }
  return res;
}

export function peakOccupancy(spans: readonly Span[]): OccupancyPeak {
  const evs: [number, number][] = [];
  for (const s of spans) {
    evs.push([s.start, 1], [s.end, -1]);
  }
  evs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let cur = 0;
  let best = 0;
  let at = 0;
  for (const [t, d] of evs) {
    cur += d;
    if (cur > best) {
      best = cur;
      at = t;
    }
  }
  return { at, count: best };
}
