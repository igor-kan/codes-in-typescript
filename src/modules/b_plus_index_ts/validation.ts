import { BPlusTree } from "./core.js";
import { BPlusError, BPlusErrorCode } from "./errors.js";
import { BPlusNode } from "./types.js";

export function verifyUniformLeafDepth<V>(tree: BPlusTree<V>): number {
  const depths: number[] = [];
  function dfs(n: BPlusNode<number, V>, d: number): void {
    if (n.isLeaf) { depths.push(d); return; }
    for (const c of n.children) dfs(c, d + 1);
  }
  dfs(tree.root, 0);
  if (new Set(depths).size !== 1) {
    throw new BPlusError(BPlusErrorCode.INVARIANT_VIOLATION, "non-uniform leaf depth");
  }
  return depths[0];
}
