import { RandomizedTreap } from "./core.js";
import { TreapNode } from "./types.js";

export function toSortedArray(treap: RandomizedTreap): number[] {
  const out: number[] = [];
  function dfs(n: TreapNode | null): void {
    if (n === null) return;
    dfs(n.left);
    out.push(n.key);
    dfs(n.right);
  }
  dfs(treap.root);
  return out;
}
