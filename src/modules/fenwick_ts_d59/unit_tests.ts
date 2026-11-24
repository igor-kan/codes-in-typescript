import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const fw = new Core.FenwickTree(6);
fw.add(1, 5); fw.add(3, 10); fw.add(5, -2);
assert.equal(fw.rangeSum(1, 5), 13);
assert.equal(fw.rangeSum(0, 2), 5);
