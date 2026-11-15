import { mergeSpans, subtractSpans } from "./core.js";
import { totalSpanLength } from "./fast_path.js";
import { verifySubtractionConservation } from "./invariants.js";

const a = [{ start: 0, end: 30 }, { start: 40, end: 70 }];
const b = [{ start: 10, end: 20 }, { start: 50, end: 80 }];
const d = subtractSpans(a, b);
verifySubtractionConservation(mergeSpans(a), d, subtractSpans(a, d));
if (totalSpanLength(d) !== 20 + 10) throw new Error("length conservation failed");
