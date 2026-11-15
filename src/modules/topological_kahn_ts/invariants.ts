import { TopoError, TopoErrorCode } from "./errors.js";
import { TopoSchedule } from "./types.js";

export function verifyPrecedence(edges: readonly [string, string][], sched: TopoSchedule): void {
  if (!sched.isAcyclic) return;
  const pos = new Map<string, number>();
  sched.order.forEach((n, i) => pos.set(n, i));
  for (const [u, v] of edges) {
    if ((pos.get(u) ?? 0) >= (pos.get(v) ?? 0)) {
      throw new TopoError(TopoErrorCode.INVARIANT_VIOLATION, `edge ${u}->${v} inverted`);
    }
  }
}
