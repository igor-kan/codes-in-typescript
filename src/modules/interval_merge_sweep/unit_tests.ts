import { mergeSpans, peakOccupancy, subtractSpans } from "./core.js";
import { validateSpans } from "./interface.js";
import { assertDisjointSorted } from "./validation.js";

const spans = [{ start: 1, end: 5 }, { start: 3, end: 8 }, { start: 10, end: 14 }, { start: 6, end: 9 }];
validateSpans(spans);
const m = mergeSpans(spans);
assertDisjointSorted(m);
if (m.length !== 2 || m[0].start !== 1 || m[0].end !== 9) throw new Error("merge mismatch");
const sub = subtractSpans([{ start: 0, end: 10 }], [{ start: 2, end: 4 }, { start: 7, end: 12 }]);
if (sub.length !== 2 || sub[0].start !== 0 || sub[0].end !== 2 || sub[1].start !== 4 || sub[1].end !== 7) {
  throw new Error("subtract mismatch");
}
if (peakOccupancy(spans).count !== 2) throw new Error("peak occupancy mismatch");
