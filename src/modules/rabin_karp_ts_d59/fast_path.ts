export function fastArraySum(xs: readonly number[]): number {
  let s = 0;
  for (const x of xs) {
    s += x;
  }
  return s;
}
