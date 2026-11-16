import { assert } from "./errors.js";
import { parallelPartitionStats } from "./concurrent.js";
import { RandomizedTreap } from "./core.js";
import { verifyTreapInvariants } from "./invariants.js";

async function run(): Promise<void> {
  const tr = new RandomizedTreap();
  const ref = new Set<number>();
  for (let i = 0; i < 120; i++) {
    const k = (i * 37 + 11) % 80;
    if (i % 5 === 0) {
      assert.equal(tr.erase(k), ref.delete(k));
    } else {
      assert.equal(tr.insert(k), !ref.has(k) && (ref.add(k), true));
    }
  }
  verifyTreapInvariants(tr);
  const sorted = [...ref].sort((a, b) => a - b);
  for (let k = 0; k < sorted.length; k++) assert.equal(tr.kthSmallest(k), sorted[k]);
  const res = await parallelPartitionStats([[5, 2, 8], [9, 1]]);
  assert.deepEqual(res, [[2, 5, 8], [1, 9]]);
}

void run();
