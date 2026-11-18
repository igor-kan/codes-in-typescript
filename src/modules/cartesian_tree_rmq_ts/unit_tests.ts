import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const ct = Core.buildCartesian([9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5]); assert.equal(Core.queryRmqIdx(ct, 0, 2), 1); assert.equal(Core.queryRmqIdx(ct, 4, 10), 10);
