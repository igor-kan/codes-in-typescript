import { assert } from "./errors.js";
import { parallelValidateShards } from "./concurrent.js";
import { verifyAgainstArrayOracle } from "./invariants.js";
import { RangeUpdateOp } from "./types.js";
import { validateRangeOps } from "./validation.js";

async function run(): Promise<void> {
  const ops: RangeUpdateOp[] = [];
  for (let i = 0; i < 40; i++) {
    const lo = (i * 7) % 20;
    const hi = lo + (i % 5);
    ops.push({ lo, hi, delta: (i % 3) + 1 });
  }
  validateRangeOps(25, ops);
  verifyAgainstArrayOracle(25, ops);
  const sums = await parallelValidateShards(25, [ops.slice(0, 20), ops.slice(20)]);
  assert.equal(sums.length, 2);
}

void run();
