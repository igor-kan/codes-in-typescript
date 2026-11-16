import { RandomizedTreap } from "./core.js";
import { TreapError, TreapErrorCode } from "./errors.js";
import { TreapNode } from "./types.js";

export function verifyTreapInvariants(treap: RandomizedTreap): void {
  function check(n: TreapNode | null): { count: number; min: number; max: number } | null {
    if (n === null) return null;
    const lc = check(n.left);
    const rc = check(n.right);
    if (n.left && n.left.prio > n.prio) throw new TreapError(TreapErrorCode.INVARIANT_VIOLATION, "heap left");
    if (n.right && n.right.prio > n.prio) throw new TreapError(TreapErrorCode.INVARIANT_VIOLATION, "heap right");
    if (lc && lc.max >= n.key) throw new TreapError(TreapErrorCode.INVARIANT_VIOLATION, "bst left");
    if (rc && rc.min <= n.key) throw new TreapError(TreapErrorCode.INVARIANT_VIOLATION, "bst right");
    const c = 1 + (lc?.count ?? 0) + (rc?.count ?? 0);
    if (c !== n.size) throw new TreapError(TreapErrorCode.INVARIANT_VIOLATION, "size mismatch");
    return { count: c, min: lc ? lc.min : n.key, max: rc ? rc.max : n.key };
  }
  check(treap.root);
}
