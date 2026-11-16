import { replayAll } from "./fast_path.js";
import { RgaNode } from "./types.js";

export async function convergeParallelReplicas(opsAFirst: readonly RgaNode[], opsBFirst: readonly RgaNode[]): Promise<readonly [string, string]> {
  const [r1, r2] = await Promise.all([
    Promise.resolve(replayAll("r1", opsAFirst)),
    Promise.resolve(replayAll("r2", opsBFirst)),
  ]);
  return [r1, r2];
}
