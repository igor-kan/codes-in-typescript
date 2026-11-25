import { DiffMetric } from "./types.js";

export function myersEditDistance<T>(a: readonly T[], b: readonly T[]): DiffMetric {
  const n = a.length;
  const m = b.length;
  const max = n + m;
  if (max === 0) return { editDistance: 0, lcsLength: 0 };
  const v = new Int32Array(2 * max + 1);
  const off = max;
  for (let d = 0; d <= max; d++) {
    for (let k = -d; k <= d; k += 2) {
      let x = (k === -d || (k !== d && v[off + k - 1] < v[off + k + 1]))
        ? v[off + k + 1]
        : v[off + k - 1] + 1;
      let y = x - k;
      while (x < n && y < m && a[x] === b[y]) {
        x++;
        y++;
      }
      v[off + k] = x;
      if (x >= n && y >= m) {
        return { editDistance: d, lcsLength: (n + m - d) >> 1 };
      }
    }
  }
  return { editDistance: max, lcsLength: 0 };
}
