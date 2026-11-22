import { assert } from "./errors.js";
import * as Core from "./core.js";
import { ensureTrue } from "./invariants.js";
ensureTrue(true, "ok");
const bus = new Core.TypedEventBus<{ ping: string }>();
assert.equal(bus.emit("ping", "ok"), 0);
