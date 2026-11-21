export function resolveJsonPointer(doc: unknown, pointer: string): unknown {
  if (pointer === "") return doc;
  if (!pointer.startsWith("/")) throw new Error("invalid RFC 6901 pointer");
  const segs = pointer.slice(1).split("/").map((s) => s.replace(/~1/g, "/").replace(/~0/g, "~"));
  let cur: unknown = doc;
  for (const seg of segs) {
    if (cur === null || typeof cur !== "object") return undefined;
    if (Array.isArray(cur)) {
      const idx = Number(seg);
      if (!Number.isInteger(idx) || idx < 0 || idx >= cur.length) return undefined;
      cur = cur[idx];
    } else {
      const rec = cur as Record<string, unknown>;
      if (!Object.prototype.hasOwnProperty.call(rec, seg)) return undefined;
      cur = rec[seg];
    }
  }
  return cur;
}
