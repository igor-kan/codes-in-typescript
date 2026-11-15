import { routeWithSeed } from "./core.js";
import { JumpRouterConfig } from "./types.js";

export async function routeBatchAsync(cfg: JumpRouterConfig, keys: readonly bigint[]): Promise<number[]> {
  return Promise.all(keys.map(async (k) => routeWithSeed(cfg.seed, k, cfg.numBuckets)));
}
