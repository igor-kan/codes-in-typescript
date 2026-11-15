import { computeMyersDiff } from "./core.js";

const a = Array.from("the_quick_brown_fox_jumps_over_lazy_dog");
const b = Array.from("the_fast_brown_hound_leaps_over_calm_dog");
const t0 = Date.now();
let sink = 0;
for (let i = 0; i < 1000; i++) {
  sink += computeMyersDiff(a, b).length;
}
console.log(`myers_diff_lcs ms=${Date.now() - t0} sink=${sink}`);
