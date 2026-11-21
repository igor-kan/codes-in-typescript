export function resolveBuildOrder(nodes: readonly string[], deps: ReadonlyArray<readonly [string, string]>): string[] {
  const adj = new Map<string, string[]>();
  const ind = new Map<string, number>();
  for (const n of nodes) {
    adj.set(n, []);
    ind.set(n, 0);
  }
  for (const [req, dep] of deps) {
    adj.get(req)?.push(dep);
    ind.set(dep, (ind.get(dep) ?? 0) + 1);
  }
  const q: string[] = nodes.filter((n) => (ind.get(n) ?? 0) === 0);
  const out: string[] = [];
  for (let i = 0; i < q.length; i++) {
    const u = q[i];
    out.push(u);
    for (const v of adj.get(u) ?? []) {
      const nxt = (ind.get(v) ?? 0) - 1;
      ind.set(v, nxt);
      if (nxt === 0) q.push(v);
    }
  }
  if (out.length !== nodes.length) throw new Error("cycle detected in dependency graph");
  return out;
}
