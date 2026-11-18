import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const ct = Core.buildCartesian([5, 2, 8]); assert.equal(Core.queryRmqIdx(ct, 0, 2), 1);
