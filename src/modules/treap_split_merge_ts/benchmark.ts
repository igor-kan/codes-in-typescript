import * as Core from "./core.js";
import * as Fast from "./fast_path.js";

export function runBenchmark(): void {
  let sink = 0;
  const tr = new Core.RandomizedTreap(); for(let i=0;i<256;i++) tr.insert((i*41)%256);
  const t0 = Date.now();
  for (let it = 0; it < 200; it++) {
    for(let k=0;k<32;k++) sink += tr.kthSmallest((k+it)%128);
  }
  const ms = (Date.now() - t0) / 200;
  void ms;
  void sink;
  void Core;
  void Fast;
}

runBenchmark();
