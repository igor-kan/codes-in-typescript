import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const lc = new Core.LiChaoTree(32); lc.addLine(3, 1); lc.addLine(1, 10); assert.equal(lc.query(2), 7);
