/**
 * Core type definitions and interfaces for Binary Heap Priority Queue with Custom Comparator Typings.
 * Module: priority_event_queue
 */

export const ALIGNMENT = 64;

export interface ModuleConfig {
  capacity: number;
  tolerance: number;
  maxIterations?: number;
  flags?: number;
}

export const DEFAULT_CONFIG: Readonly<ModuleConfig> = Object.freeze({
  capacity: 1024,
  tolerance: 1e-12,
  maxIterations: 1000,
  flags: 0,
});

export enum ModuleErrorCode {
  SUCCESS = 0,
  ERR_NULL_POINTER = -1,
  ERR_INVALID_PARAM = -2,
  ERR_OUT_OF_BOUNDS = -3,
}

export interface KernelContext<T> {
  readonly config: ModuleConfig;
  operationsCount: number;
  buffer: T[];
}
