import { jumpConsistentHash } from "./core.js";
import { createJumpRouter } from "./interface.js";
import { verifyMonotonicity } from "./invariants.js";
import { measureResizeChurn } from "./fast_path.js";

const cfg = createJumpRouter(8, 123n);
const sample: bigint[] = [];
for (let i = 0; i < 1000; i++) sample.push(BigInt(i));
verifyMonotonicity(8, 9, sample);
const rep = measureResizeChurn(cfg.numBuckets, 9, 2000);
const expectedMoves = 2000 / 9;
if (Math.abs(rep.movedKeys - expectedMoves) > expectedMoves * 0.35) {
  throw new Error(`unexpected churn: ${rep.movedKeys}`);
}
if (jumpConsistentHash(42n, 1) !== 0) throw new Error("single bucket must map to 0");
