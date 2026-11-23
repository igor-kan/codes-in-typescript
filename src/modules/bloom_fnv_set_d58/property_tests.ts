import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const bf = new Core.StringBloom512();
for (const w of ["one", "two", "three", "four"]) bf.add(w);
for (const w of ["one", "two", "three", "four"]) assert.equal(bf.mightContain(w), true);
