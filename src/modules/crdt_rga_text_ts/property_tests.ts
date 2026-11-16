import { assert } from "./errors.js";
import { convergeParallelReplicas } from "./concurrent.js";
import { RgaDocument } from "./core.js";
import { verifyConvergence } from "./invariants.js";
import { validateRgaOp } from "./validation.js";

async function run(): Promise<void> {
  const doc = new RgaDocument("alpha");
  const ops = [
    doc.insertLocal(-1, "A"),
    doc.insertLocal(0, "B"),
    doc.insertLocal(1, "C"),
  ];
  for (const op of ops) validateRgaOp(op);
  const alt = new RgaDocument("beta");
  for (const op of ops) alt.applyRemote(op);
  const branchA = ops[1]; // anchor
  const k1 = doc.insertLocal(1, "1");
  const k2 = alt.insertLocal(1, "2");
  void branchA;
  const order1 = [...ops, k1, k2];
  const order2 = [...ops, k2, k1];
  const [t1, t2] = await convergeParallelReplicas(order1, order2);
  verifyConvergence(t1, t2);
  assert.equal(t1.length, 5);
}

void run();
