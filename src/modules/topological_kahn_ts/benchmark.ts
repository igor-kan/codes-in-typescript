import { scheduleDag } from "./core.js";

const nodes = Array.from({ length: 300 }, (_, i) => `n${i}`);
const edges: [string, string][] = [];
for (let i = 0; i < 299; i++) edges.push([`n${i}`, `n${i + 1}`]);
const t0 = Date.now();
let sink = 0;
for (let i = 0; i < 50; i++) sink += scheduleDag(nodes, edges).order.length;
console.log(`topological_kahn_ts ms=${Date.now() - t0} sink=${sink}`);
