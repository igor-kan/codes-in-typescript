import { BPlusTree } from "./core.js";
import { BPlusError, BPlusErrorCode } from "./errors.js";
import { leftmostLeaf } from "./fast_path.js";

export function verifySortedLeafChain<V>(tree: BPlusTree<V>): number {
  let cur = leftmostLeaf(tree);
  let prev = -Infinity;
  let total = 0;
  while (cur !== null) {
    for (const k of cur.keys) {
      if (k <= prev) throw new BPlusError(BPlusErrorCode.INVARIANT_VIOLATION, "leaf chain not strictly increasing");
      prev = k;
      total++;
    }
    cur = cur.next!;
  }
  return total;
}
