import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const fw = new Core.FenwickTree(4);
for (let i = 0; i < 4; i++) fw.add(i, i + 1);
assert.equal(fw.rangeSum(0, 3), 10);
