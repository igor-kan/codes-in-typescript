import * as Core from "./core.js";
import * as Fast from "./fast_path.js";

export function runBenchmark(): void {
  let sink = 0;
  const bit = new Core.DualFenwickTree(256);
  const t0 = Date.now();
  for (let it = 0; it < 200; it++) {
    bit.addRange(10, 200, 1); sink += bit.rangeSum(0, 255);
  }
  const ms = (Date.now() - t0) / 200;
  void ms;
  void sink;
  void Core;
  void Fast;
}

runBenchmark();
