import { BPlusTree } from "./core.js";

export function leftmostLeaf<V>(tree: BPlusTree<V>) {
  let cur = tree.root;
  while (!cur.isLeaf) cur = cur.children[0];
  return cur;
}
