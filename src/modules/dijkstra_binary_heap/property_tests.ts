import { dijkstraShortestPaths } from "./core.js";
import { verifyBellmanOptimality } from "./invariants.js";

const n = 25;
const adj = Array.from({ length: n }, (_, u) => {
  const row = [];
  if (u + 1 < n) row.push({ to: u + 1, weight: (u % 5) + 1 });
  if (u + 3 < n) row.push({ to: u + 3, weight: 4 });
  return row;
});
verifyBellmanOptimality(adj, dijkstraShortestPaths(adj, 0));
