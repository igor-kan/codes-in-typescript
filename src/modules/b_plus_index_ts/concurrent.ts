import { BPlusTree } from "./core.js";

export async function batchRangeQueries<V>(tree: BPlusTree<V>, ranges: readonly [number, number][]): Promise<[number, V][][]> {
  return Promise.all(ranges.map(async ([lo, hi]) => tree.rangeScan(lo, hi)));
}
