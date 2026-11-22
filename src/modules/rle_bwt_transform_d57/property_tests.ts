import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
for (const w of ["mississippi", "abracadabra", "aaaa"]) {
  assert.equal(Core.bwtInverse(Core.bwtForward(w)), w);
}
