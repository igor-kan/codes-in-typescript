import { assert } from "./errors.js";
import { parallelConnectivitySnapshots } from "./concurrent.js";
import { RollbackDSU } from "./core.js";
import { uniteBatch } from "./fast_path.js";
import { verifyDsuMass } from "./invariants.js";

async function run(): Promise<void> {
  const dsu = new RollbackDSU(20);
  const e1: [number, number][] = [[0,1],[2,3],[4,5],[1,2]];
  const cp = dsu.snapshot();
  uniteBatch(dsu, e1);
  verifyDsuMass(dsu);
  dsu.rollback(cp);
  assert.equal(dsu.components, 20);
  const res = await parallelConnectivitySnapshots(10, [[[0,1],[1,2]], [[0,9]]]);
  assert.deepEqual(res, [8, 9]);
}

void run();
