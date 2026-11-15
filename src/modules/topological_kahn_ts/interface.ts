import { TopoError, TopoErrorCode } from "./errors.js";

export function validateEdgesExist(nodes: readonly string[], edges: readonly [string, string][]): void {
  const known = new Set(nodes);
  for (const [u, v] of edges) {
    if (!known.has(u) || !known.has(v)) {
      throw new TopoError(TopoErrorCode.OUT_OF_BOUNDS, `unknown vertex in edge (${u}, ${v})`);
    }
  }
}
