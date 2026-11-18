import { assert } from "./errors.js";
import * as Core from "./core.js";
import { checkNonNeg } from "./validation.js";
checkNonNeg(1);
const b = new Core.SmoothWRR([3, 2, 1]); assert.equal(b.nextPeer(), 0); assert.equal(b.nextPeer(), 1);
