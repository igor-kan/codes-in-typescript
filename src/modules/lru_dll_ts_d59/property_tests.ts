import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const c = new Core.ExplicitLru<string>(1);
c.put("a", "1"); c.put("b", "2");
assert.equal(c.get("a"), undefined);
