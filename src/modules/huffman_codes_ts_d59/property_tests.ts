import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const c = Core.buildHuffman("aaaaabbc");
assert.equal(c["a"].length <= c["c"].length, true);
