import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
assert.equal(new Core.Eertree('aaaaa').distinctCount(), 5);
