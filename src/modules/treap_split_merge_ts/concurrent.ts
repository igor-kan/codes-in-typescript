import { RandomizedTreap } from "./core.js";
import { toSortedArray } from "./fast_path.js";

export async function parallelPartitionStats(shards: readonly (readonly number[])[]): Promise<number[][]> {
  return Promise.all(shards.map(async (keys) => {
    const tr = new RandomizedTreap();
    for (const k of keys) tr.insert(k);
    return toSortedArray(tr);
  }));
}
