type HNode = { ch?: string; freq: number; left?: HNode; right?: HNode };

export function buildHuffman(text: string): Record<string, string> {
  const counts = new Map<string, number>();
  for (const ch of text) counts.set(ch, (counts.get(ch) ?? 0) + 1);
  const nodes: HNode[] = Array.from(counts.entries())
    .sort((a, b) => a[0] < b[0] ? -1 : 1)
    .map(([ch, freq]) => ({ ch, freq }));
  if (nodes.length === 1) return { [nodes[0].ch as string]: "0" };
  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    const l = nodes.shift() as HNode;
    const r = nodes.shift() as HNode;
    nodes.push({ freq: l.freq + r.freq, left: l, right: r });
  }
  const codes: Record<string, string> = {};
  const walk = (n: HNode, pfx: string): void => {
    if (n.ch !== undefined) { codes[n.ch] = pfx; return; }
    if (n.left) walk(n.left, pfx + "0");
    if (n.right) walk(n.right, pfx + "1");
  };
  walk(nodes[0], "");
  return codes;
}

export function huffmanRoundtrip(text: string): string {
  if (text.length === 0) return "";
  const codes = buildHuffman(text);
  const rev = new Map<string, string>();
  for (const [k, v] of Object.entries(codes)) rev.set(v, k);
  let bits = "";
  for (const ch of text) bits += codes[ch];
  let out = "", cur = "";
  for (const b of bits) {
    cur += b;
    const hit = rev.get(cur);
    if (hit !== undefined) { out += hit; cur = ""; }
  }
  return out;
}
