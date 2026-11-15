import { applyPatch } from "./core.js";
import { MyersError, MyersErrorCode } from "./errors.js";
import { EditOp } from "./types.js";

export function verifyRoundtripPatch<T>(src: readonly T[], dst: readonly T[], ops: readonly EditOp<T>[]): void {
  const rebuilt = applyPatch(src, ops);
  if (rebuilt.length !== dst.length) {
    throw new MyersError(MyersErrorCode.INVARIANT_VIOLATION, "rebuilt length mismatch");
  }
  for (let i = 0; i < dst.length; i++) {
    if (rebuilt[i] !== dst[i]) {
      throw new MyersError(MyersErrorCode.INVARIANT_VIOLATION, "rebuilt content mismatch");
    }
  }
}
