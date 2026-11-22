import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const tr = new Core.AutocompleteTrie();
tr.insert("type"); tr.insert("typescript"); tr.insert("typed"); tr.insert("trie");
assert.deepEqual(tr.suggest("typ", 2), ["type", "typed"]);
