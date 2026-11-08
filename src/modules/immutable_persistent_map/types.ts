/**
 * Core type definitions and interfaces for Structural Sharing Persistent Map via HAMT Bitmap Tries.
 * Module: immutable_persistent_map
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
