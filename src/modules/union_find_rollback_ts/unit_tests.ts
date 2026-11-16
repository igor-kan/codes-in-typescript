import { assert } from "./errors.js";
import { RollbackDSU } from "./core.js";
import { verifyDsuMass } from "./invariants.js";

const dsu = new RollbackDSU(6);
dsu.unite(0, 1);
dsu.unite(1, 2);
const cp = dsu.snapshot();
assert.equal(dsu.components, 4);
dsu.unite(3, 4);
dsu.unite(0, 3);
assert.equal(dsu.components, 2);
verifyDsuMass(dsu);
dsu.rollback(cp);
assert.equal(dsu.components, 4);
assert.notEqual(dsu.find(0), dsu.find(3));
verifyDsuMass(dsu);
