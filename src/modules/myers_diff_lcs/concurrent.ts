import { computeMyersDiff } from "./core.js";
import { EditOp } from "./types.js";

export async function diffPairsAsync<T>(pairs: readonly [readonly T[], readonly T[]][]): Promise<EditOp<T>[][]> {
  return Promise.all(pairs.map(async ([a, b]) => computeMyersDiff(a, b)));
}
