import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const tr = new Core.AutocompleteTrie();
tr.insert("beta"); tr.insert("alpha");
assert.deepEqual(tr.suggest("z", 5), []);
