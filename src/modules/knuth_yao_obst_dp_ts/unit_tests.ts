import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
assert.deepEqual(Core.solveObst([34, 8, 50]), { cost: 142, root: 2 });
