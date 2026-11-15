import { HyperLogLogTs } from "./core.js";
import { validatePrecision } from "./interface.js";
import { verifySelfMergeIdempotent } from "./invariants.js";
import { verifyRegisterLength } from "./validation.js";

validatePrecision(12);
const h = new HyperLogLogTs(12);
verifyRegisterLength(h);
for (let i = 0; i < 4000; i++) {
  h.add(BigInt(i));
  h.add(BigInt(i));
}
verifySelfMergeIdempotent(h);
const est = h.count();
if (Math.abs(est - 4000) / 4000 > 0.08) throw new Error(`bad HLL estimate: ${est}`);
