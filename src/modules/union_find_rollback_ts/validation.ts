import { RollbackDSU } from "./core.js";
import { RollbackDsuError, RollbackDsuErrorCode } from "./errors.js";

export function validateCheckpoint(dsu: RollbackDSU, cp: number): void {
  if (!Number.isInteger(cp) || cp < 0 || cp > dsu.snapshot()) {
    throw new RollbackDsuError(RollbackDsuErrorCode.OUT_OF_BOUNDS, "checkpoint out of history bounds");
  }
}
