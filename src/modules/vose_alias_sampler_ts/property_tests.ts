import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const t = Core.buildAliasTable([2.0, 2.0]); assert.equal(Core.sampleAlias(t, 0, 0.2), 0);
