import { DijkstraError, DijkstraErrorCode } from "./errors.js";
import { ShortestPathResult } from "./types.js";

export function assertSourceZero(res: ShortestPathResult, src: number): void {
  if (res.dist[src] !== 0) {
    throw new DijkstraError(DijkstraErrorCode.INVARIANT_VIOLATION, "source distance != 0");
  }
}
