import { RollbackDSU } from "./core.js";
import { RollbackDsuError, RollbackDsuErrorCode } from "./errors.js";

export function verifyDsuMass(dsu: RollbackDSU): void {
  let rootSum = 0;
  let roots = 0;
  for (let i = 0; i < dsu.n; i++) {
    if (dsu.parent[i] === i) {
      roots++;
      rootSum += dsu.size[i];
    }
  }
  if (roots !== dsu.components || rootSum !== dsu.n) {
    throw new RollbackDsuError(RollbackDsuErrorCode.INVARIANT_VIOLATION, "DSU mass or root count drift");
  }
}
