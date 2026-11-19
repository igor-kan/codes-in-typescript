import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const st = new Core.ZkwSegTree(4); st.set(0, 7); st.set(3, 5); assert.equal(st.query(0, 3), 12);
