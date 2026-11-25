import { CfgRule } from "./types.js";

export function earleyAccept(
  rules: readonly CfgRule[],
  start: string,
  tokens: readonly string[],
): boolean {
  const n = tokens.length;
  interface Item { lhs: string; rhs: readonly string[]; dot: number; orig: number; }
  const chart: Item[][] = Array.from({ length: n + 1 }, () => []);
  const seen: Array<Set<string>> = Array.from({ length: n + 1 }, () => new Set());
  const add = (i: number, it: Item): void => {
    const key = `${it.lhs}->${it.rhs.join(" ")}@${it.dot}:${it.orig}`;
    if (!seen[i].has(key)) { seen[i].add(key); chart[i].push(it); }
  };
  for (const r of rules) if (r.lhs === start) add(0, { lhs: r.lhs, rhs: r.rhs, dot: 0, orig: 0 });
  for (let i = 0; i <= n; i++) {
    for (let idx = 0; idx < chart[i].length; idx++) {
      const it = chart[i][idx];
      if (it.dot < it.rhs.length) {
        const sym = it.rhs[it.dot];
        const isNt = rules.some((r) => r.lhs === sym);
        if (isNt) {
          for (const r of rules) if (r.lhs === sym) add(i, { lhs: r.lhs, rhs: r.rhs, dot: 0, orig: i });
        } else if (i < n && tokens[i] === sym) {
          add(i + 1, { lhs: it.lhs, rhs: it.rhs, dot: it.dot + 1, orig: it.orig });
        }
      } else {
        for (const prev of chart[it.orig]) {
          if (prev.dot < prev.rhs.length && prev.rhs[prev.dot] === it.lhs) {
            add(i, { lhs: prev.lhs, rhs: prev.rhs, dot: prev.dot + 1, orig: prev.orig });
          }
        }
      }
    }
  }
  return chart[n].some((it) => it.lhs === start && it.dot === it.rhs.length && it.orig === 0);
}
