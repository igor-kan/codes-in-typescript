import { assert } from "./errors.js";
import { RgaDocument } from "./core.js";
import { verifyConvergence } from "./invariants.js";

const d1 = new RgaDocument("siteA");
const d2 = new RgaDocument("siteB");
const o1 = d1.insertLocal(-1, "H");
const o2 = d1.insertLocal(0, "i");
d2.applyRemote(o1);
d2.applyRemote(o2);
const cA = d1.insertLocal(1, "!");
const cB = d2.insertLocal(1, "?");
d1.applyRemote(cB);
d2.applyRemote(cA);
verifyConvergence(d1.toText(), d2.toText());
assert.equal(d1.toText().length, 4);
