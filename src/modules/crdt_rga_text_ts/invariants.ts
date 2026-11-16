import { RgaError, RgaErrorCode } from "./errors.js";

export function verifyConvergence(textA: string, textB: string): void {
  if (textA !== textB) {
    throw new RgaError(RgaErrorCode.INVARIANT_VIOLATION, `replicas diverged: '${textA}' vs '${textB}'`);
  }
}
