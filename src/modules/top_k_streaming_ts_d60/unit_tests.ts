import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const mg = new Core.MisraGries(4);
for (const s of ["a","b","a","c","a","d","a","a","e","a"]) mg.observe(s);
const top = mg.candidates();
assert.equal(top[0].key, "a");
