import { HyperLogLogTs } from "./core.js";

export async function parallelCountShards(precision: number, shards: readonly (readonly bigint[])[]): Promise<number> {
  const parts = await Promise.all(shards.map(async (sh) => {
    const h = new HyperLogLogTs(precision);
    for (const k of sh) h.add(k);
    return h;
  }));
  const merged = new HyperLogLogTs(precision);
  for (const p of parts) merged.merge(p);
  return merged.count();
}
