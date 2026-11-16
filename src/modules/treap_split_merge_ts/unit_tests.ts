import { assert } from "./errors.js";
import { RandomizedTreap } from "./core.js";
import { toSortedArray } from "./fast_path.js";
import { verifyTreapInvariants } from "./invariants.js";

const tr = new RandomizedTreap();
for (const k of [40, 10, 30, 50, 20, 60, 15]) tr.insert(k);
verifyTreapInvariants(tr);
assert.equal(tr.kthSmallest(0), 10);
assert.equal(tr.kthSmallest(3), 30);
assert.equal(tr.erase(30), true);
assert.deepEqual(toSortedArray(tr), [10, 15, 20, 40, 50, 60]);
verifyTreapInvariants(tr);
