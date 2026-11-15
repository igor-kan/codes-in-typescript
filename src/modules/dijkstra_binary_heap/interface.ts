import { DijkstraError, DijkstraErrorCode } from "./errors.js";
import { Edge } from "./types.js";

export function validateGraphNonNegative(adj: readonly (readonly Edge[])[], src: number): void {
  if (src < 0 || src >= adj.length) {
    throw new DijkstraError(DijkstraErrorCode.OUT_OF_BOUNDS, "source vertex out of range");
  }
  for (const row of adj) {
    for (const e of row) {
      if (e.weight < 0 || !Number.isFinite(e.weight)) {
        throw new DijkstraError(DijkstraErrorCode.INVALID_INPUT, "negative or non-finite weight");
      }
    }
  }
}
