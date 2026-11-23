import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const r = Core.equalRange([1, 2, 2, 2, 5, 8], 2);
assert.deepEqual(r, { lower: 1, upper: 4, count: 3 });
