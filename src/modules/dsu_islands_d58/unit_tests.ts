import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const dsu = new Core.DisjointSet(5);
assert.equal(dsu.union(0, 1), true);
assert.equal(dsu.union(1, 2), true);
assert.equal(dsu.union(0, 2), false);
assert.equal(dsu.components(), 3);
