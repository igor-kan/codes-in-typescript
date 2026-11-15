import { TopoSchedule } from "./types.js";

export async function runWavePipeline(sched: TopoSchedule, execNode: (id: string) => Promise<void>): Promise<void> {
  for (const wave of sched.waves) {
    await Promise.all(wave.map(execNode));
  }
}
