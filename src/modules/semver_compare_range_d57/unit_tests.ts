import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
assert.equal(Core.satisfiesCaret("1.4.2", "1.2.0"), true);
assert.equal(Core.satisfiesCaret("2.0.0", "1.2.0"), false);
assert.equal(Core.satisfiesCaret("0.2.9", "0.2.3"), true);
