import { TopoSchedule } from "./types.js";

export function criticalWaveDepth(sched: TopoSchedule): number {
  return sched.waves.length;
}
