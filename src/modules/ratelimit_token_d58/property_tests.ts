import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const tb = new Core.VirtualTokenBucket(4, 1);
tb.consume(1000, 0);
assert.equal(tb.available(), 4);
