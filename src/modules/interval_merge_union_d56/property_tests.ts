import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const a: Array<[number, number]> = [[5, 9], [1, 4], [3, 6]];
const b: Array<[number, number]> = [[1, 4], [3, 6], [5, 9]];
assert.deepEqual(Core.mergeIntervals(a), Core.mergeIntervals(b));
