import { EditOp } from "./types.js";
import { computeMyersDiff } from "./core.js";

export function diffSequences<T>(src: readonly T[], dst: readonly T[]): EditOp<T>[] {
  return computeMyersDiff(src, dst);
}
