import { RgaDocument } from "./core.js";
import { RgaNode } from "./types.js";

export function replayAll(site: string, ops: readonly RgaNode[]): string {
  const doc = new RgaDocument(site);
  for (const op of ops) doc.applyRemote(op);
  return doc.toText();
}
