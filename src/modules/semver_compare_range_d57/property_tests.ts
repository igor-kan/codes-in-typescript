import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const a = Core.parseSemVer("1.2.3");
const b = Core.parseSemVer("1.2.9");
assert.equal(Math.sign(Core.compareSemVer(a, b)), -Math.sign(Core.compareSemVer(b, a)));
