import type { EqualRange } from "./types.js";

export function lowerBound(xs: readonly number[], target: number): number {
  let lo = 0;
  let hi = xs.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (xs[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

export function upperBound(xs: readonly number[], target: number): number {
  let lo = 0;
  let hi = xs.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (xs[mid] <= target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

export function equalRange(xs: readonly number[], target: number): EqualRange {
  const lower = lowerBound(xs, target);
  const upper = upperBound(xs, target);
  return { lower, upper, count: upper - lower };
}
