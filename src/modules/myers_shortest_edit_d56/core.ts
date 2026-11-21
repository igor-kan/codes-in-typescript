export function myersEditDistance(a: readonly string[], b: readonly string[]): number {
  const n = a.length;
  const m = b.length;
  const maxD = n + m;
  const v = new Int32Array(2 * maxD + 1);
  v.fill(-1);
  const offset = maxD;
  v[offset + 1] = 0;
  for (let d = 0; d <= maxD; d++) {
    for (let k = -d; k <= d; k += 2) {
      let x =
        k === -d || (k !== d && v[offset + k - 1] < v[offset + k + 1])
          ? v[offset + k + 1]
          : v[offset + k - 1] + 1;
      let y = x - k;
      while (x < n && y < m && a[x] === b[y]) {
        x++;
        y++;
      }
      v[offset + k] = x;
      if (x >= n && y >= m) return d;
    }
  }
  return maxD;
}
