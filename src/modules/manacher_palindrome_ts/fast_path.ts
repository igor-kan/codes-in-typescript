export function isPalin(s: string, l: number, r: number): boolean {
  while (l < r) {
    if (s[l++] !== s[--r]) return false;
  }
  return true;
}
