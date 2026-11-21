import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const doc = { "a/b": [10, { "~tilde": 42 }] };
assert.equal(Core.resolveJsonPointer(doc, "/a~1b/1/~0tilde"), 42);
assert.equal(Core.resolveJsonPointer(doc, "/missing"), undefined);
