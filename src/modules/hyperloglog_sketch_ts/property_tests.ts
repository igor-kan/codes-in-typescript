import { HyperLogLogTs } from "./core.js";

const a = new HyperLogLogTs(10);
const b = new HyperLogLogTs(10);
for (let i = 0; i < 500; i++) a.add(BigInt(i));
for (let i = 250; i < 750; i++) b.add(BigInt(i));
const c1 = new HyperLogLogTs(10); c1.merge(a); c1.merge(b);
const c2 = new HyperLogLogTs(10); c2.merge(b); c2.merge(a);
if (c1.count() !== c2.count()) throw new Error("HLL merge non-commutative");
