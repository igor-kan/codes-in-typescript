import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const cf = new Core.CuckooFilter(64); assert.equal(cf.insert(42), true); assert.equal(cf.lookup(42), true);
