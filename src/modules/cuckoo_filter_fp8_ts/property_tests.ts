import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const cf = new Core.CuckooFilter(32); cf.insert(99); assert.equal(cf.lookup(99), true);
