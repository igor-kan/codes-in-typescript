export function computePi(pat: string): number[] {
  const n = pat.length;
  const pi = Array<number>(n).fill(0);
  for (let i = 1; i < n; i++) {
    let j = pi[i - 1];
    while (j > 0 && pat[i] !== pat[j]) j = pi[j - 1];
    if (pat[i] === pat[j]) j++;
    pi[i] = j;
  }
  return pi;
}

export function kmpFirstMatch(text: string, pat: string): number {
  if (pat.length === 0) return 0;
  const pi = computePi(pat);
  let j = 0;
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pat[j]) j = pi[j - 1];
    if (text[i] === pat[j]) j++;
    if (j === pat.length) return i - pat.length + 1;
  }
  return -1;
}
