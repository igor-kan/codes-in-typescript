import * as Core from "./core.js";
import * as Fast from "./fast_path.js";

export function runBenchmark(): void {
  let sink = 0;
  const d = new Core.RgaDocument('bench');
  const t0 = Date.now();
  for (let it = 0; it < 200; it++) {
    const dd = new Core.RgaDocument('b'); for(let i=-1;i<24;i++) dd.insertLocal(i, 'x'); sink+=dd.toText().length;
  }
  const ms = (Date.now() - t0) / 200;
  void ms;
  void sink;
  void Core;
  void Fast;
}

runBenchmark();
