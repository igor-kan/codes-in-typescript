export function rabinKarpFind(text: string, pat: string): number[] {
  const n = text.length, m = pat.length;
  if (m === 0 || m > n) return [];
  const mod = 1000000007;
  const base = 257;
  let pow = 1;
  for (let i = 0; i < m - 1; i++) pow = (pow * base) % mod;
  let ph = 0, th = 0;
  for (let i = 0; i < m; i++) {
    ph = (ph * base + pat.charCodeAt(i)) % mod;
    th = (th * base + text.charCodeAt(i)) % mod;
  }
  const out: number[] = [];
  for (let i = 0; i <= n - m; i++) {
    if (th === ph && text.slice(i, i + m) === pat) out.push(i);
    if (i < n - m) {
      th = (th - ((text.charCodeAt(i) * pow) % mod) + mod) % mod;
      th = (th * base + text.charCodeAt(i + m)) % mod;
    }
  }
  return out;
}
