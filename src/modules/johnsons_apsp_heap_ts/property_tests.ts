import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const d = Core.johnsonApsp(3, [{u:0,v:1,w:10},{u:0,v:2,w:2},{u:2,v:1,w:-1}]); assert.equal(d[0][1], 1);
