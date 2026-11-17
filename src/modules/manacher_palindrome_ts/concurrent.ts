import { ManacherEngine } from './core.js';

export async function parallelCounts(texts: string[]): Promise<number[]> {
  const e = new ManacherEngine();
  return Promise.all(texts.map(async t => e.analyze(t).count));
}
