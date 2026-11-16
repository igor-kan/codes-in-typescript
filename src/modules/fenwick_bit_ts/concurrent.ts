import { DualFenwickTree } from "./core.js";
import { RangeUpdateOp } from "./types.js";

export async function parallelValidateShards(n: number, shards: readonly (readonly RangeUpdateOp[])[]): Promise<number[]> {
  return Promise.all(shards.map(async (ops) => {
    const bit = new DualFenwickTree(n);
    for (const op of ops) bit.addRange(op.lo, op.hi, op.delta);
    return bit.prefixSum(n - 1);
  }));
}
