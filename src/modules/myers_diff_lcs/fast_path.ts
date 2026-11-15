import { EditOp } from "./types.js";

export function editDistanceFromOps<T>(ops: readonly EditOp<T>[]): number {
  let d = 0;
  for (const op of ops) {
    if (op.kind !== "eq") d++;
  }
  return d;
}
