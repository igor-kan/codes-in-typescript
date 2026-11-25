import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const mg = new Core.MisraGries(3);
const stream = ["x","x","x","x","y","z","w","x"];
for (const s of stream) mg.observe(s);
assert.equal(mg.candidates()[0].key, "x");
