export function scheduleDagWaves(nodes: readonly string[], edges: ReadonlyArray<readonly [string, string]>): string[][] {
  const adj = new Map<string, string[]>();
  const ind = new Map<string, number>();
  for (const n of nodes) { adj.set(n, []); ind.set(n, 0); }
  for (const [u, v] of edges) {
    adj.get(u)?.push(v);
    ind.set(v, (ind.get(v) ?? 0) + 1);
  }
  let frontier = nodes.filter((n) => (ind.get(n) ?? 0) === 0).sort();
  const waves: string[][] = [];
  let seen = 0;
  while (frontier.length > 0) {
    waves.push(frontier);
    seen += frontier.length;
    const next: string[] = [];
    for (const u of frontier) {
      for (const v of adj.get(u) ?? []) {
        const d = (ind.get(v) ?? 0) - 1;
        ind.set(v, d);
        if (d === 0) next.push(v);
      }
    }
    frontier = next.sort();
  }
  if (seen !== nodes.length) throw new Error("cycle prevents wave scheduling");
  return waves;
}
