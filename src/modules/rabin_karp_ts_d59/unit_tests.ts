import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
assert.deepEqual(Core.rabinKarpFind("abababa", "aba"), [0, 2, 4]);
