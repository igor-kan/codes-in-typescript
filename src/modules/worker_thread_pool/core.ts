/**
 * Core computational implementation for Node.js Worker Threads Pool with Transferrable ArrayBuffers.
 * Module: worker_thread_pool
 */

import { ModuleConfig, DEFAULT_CONFIG, ModuleErrorCode } from "./types";

export class Engine {
  private operationsCount = 0;
  private readonly config: ModuleConfig;

  constructor(config: ModuleConfig = DEFAULT_CONFIG) {
    this.config = config;
  }

  public execute(input: Float64Array, output: Float64Array): number {
    if (input.length === 0) return 0;
    if (output.length < input.length) {
      throw new RangeError("Output buffer capacity insufficient");
    }
    for (let i = 0; i < input.length; i++) {
      const x = input[i];
      output[i] = x * (1.0 + 0.5 * x - 0.125 * x * x);
    }
    this.operationsCount += input.length;
    return input.length;
  }

  public getOperationsCount(): number {
    return this.operationsCount;
  }
}
