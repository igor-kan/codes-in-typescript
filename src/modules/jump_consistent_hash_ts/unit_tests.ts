import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const b10 = Core.jumpConsistentHash(12345n, 10); const b11 = Core.jumpConsistentHash(12345n, 11); assert.equal(b11 === b10 || b11 === 10, true);
