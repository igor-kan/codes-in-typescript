import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const ord = Core.resolveBuildOrder(["a", "b", "c"], [["a", "b"], ["b", "c"]]);
assert.deepEqual(ord, ["a", "b", "c"]);
