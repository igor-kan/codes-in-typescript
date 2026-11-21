import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const d = { nested: { ok: true } };
assert.equal(Core.resolveJsonPointer(d, ""), d);
assert.equal(Core.resolveJsonPointer(d, "/nested/ok"), true);
