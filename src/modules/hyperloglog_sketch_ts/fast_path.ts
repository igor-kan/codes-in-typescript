import { HyperLogLogTs } from "./core.js";

export function addMany(h: HyperLogLogTs, keys: readonly bigint[]): void {
  for (const k of keys) h.add(k);
}
