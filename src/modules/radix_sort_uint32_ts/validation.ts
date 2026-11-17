import { ModError, ModErrorCode } from './errors.js';

export function checkNonNeg(x: number): void {
  if (x < 0) throw new ModError(ModErrorCode.OUT_OF_BOUNDS, 'negative value disallowed');
}
