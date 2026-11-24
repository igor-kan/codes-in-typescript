import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const d = Core.dijkstraTs(2, 1, [[{ to: 1, weight: 2 }], []]);
assert.equal(d[0], Infinity);
