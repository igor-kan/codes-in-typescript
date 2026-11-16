import { assert } from "./errors.js";
import { DualFenwickTree, PointFenwick } from "./core.js";
import { verifyAgainstArrayOracle } from "./invariants.js";

const bit = new DualFenwickTree(10);
bit.addRange(2, 5, 4);
bit.addRange(4, 8, 3);
assert.equal(bit.rangeSum(2, 5), 4 * 4 + 3 * 2);
verifyAgainstArrayOracle(12, [{ lo: 0, hi: 11, delta: 2 }, { lo: 3, hi: 7, delta: 5 }]);

const pb = new PointFenwick(8);
for (let i = 0; i < 8; i++) pb.add(i, 10);
assert.equal(pb.lowerBound(25), 2);
