import { dijkstraShortestPaths } from "./core.js";

const adj = Array.from({ length: 200 }, (_, u) => u < 199 ? [{ to: u + 1, weight: 2 }, { to: (u + 7) % 200, weight: 5 }] : []);
const t0 = Date.now();
let sink = 0;
for (let i = 0; i < 100; i++) sink += dijkstraShortestPaths(adj, 0).dist[199];
console.log(`dijkstra_binary_heap ms=${Date.now() - t0} sink=${sink}`);
