import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const w = Core.scheduleDagWaves(["a", "b", "c", "d"], [["a", "c"], ["b", "c"], ["c", "d"]]);
assert.deepEqual(w, [["a", "b"], ["c"], ["d"]]);
