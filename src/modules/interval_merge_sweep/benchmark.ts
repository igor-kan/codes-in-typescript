import { mergeSpans, peakOccupancy } from "./core.js";

const spans = Array.from({ length: 1000 }, (_, i) => ({ start: i * 3, end: i * 3 + 5 }));
const t0 = Date.now();
let sink = 0;
for (let i = 0; i < 200; i++) {
  sink += mergeSpans(spans).length + peakOccupancy(spans).count;
}
console.log(`interval_merge_sweep ms=${Date.now() - t0} sink=${sink}`);
