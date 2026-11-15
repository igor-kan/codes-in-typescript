import { HyperLogLogTs } from "./core.js";

const h = new HyperLogLogTs(12);
const t0 = Date.now();
for (let i = 0; i < 20000; i++) h.add(BigInt(i));
console.log(`hyperloglog_sketch_ts ms=${Date.now() - t0} est=${h.count().toFixed(1)}`);
