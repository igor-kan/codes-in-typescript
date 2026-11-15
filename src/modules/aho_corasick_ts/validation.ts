import { AhoCorasickAutomaton } from "./core.js";
import { AhoError, AhoErrorCode } from "./errors.js";

export function verifyFailBounds(ac: AhoCorasickAutomaton): void {
  for (const n of ac.nodes) {
    if (n.fail < 0 || n.fail >= ac.nodes.length) {
      throw new AhoError(AhoErrorCode.INVARIANT_VIOLATION, "fail state out of bounds");
    }
  }
}
