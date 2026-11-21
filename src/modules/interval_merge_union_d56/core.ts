export function mergeIntervals(spans: ReadonlyArray<readonly [number, number]>): Array<[number, number]> {
  if (spans.length === 0) return [];
  const sorted = spans.map(([s, e]): [number, number] => [s, e]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const out: Array<[number, number]> = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const last = out[out.length - 1];
    const [cs, ce] = sorted[i];
    if (cs <= last[1]) {
      last[1] = Math.max(last[1], ce);
    } else {
      out.push([cs, ce]);
    }
  }
  return out;
}

export function coveredLength(spans: ReadonlyArray<readonly [number, number]>): number {
  return mergeIntervals(spans).reduce((acc, [s, e]) => acc + (e - s), 0);
}
