import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const b = new Core.SmoothWRR([2, 2]); assert.equal(b.nextPeer() !== b.nextPeer(), true);
