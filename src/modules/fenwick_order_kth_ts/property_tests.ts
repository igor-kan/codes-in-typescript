import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const f = new Core.OrderFenwick(8); f.add(0, 1); f.add(7, 1); assert.equal(f.kth(2), 7);
