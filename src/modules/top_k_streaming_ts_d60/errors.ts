export enum ModErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class ModError extends Error {
  public readonly code: ModErrorCode;
  constructor(code: ModErrorCode, message: string) {
    super(message);
    this.name = "ModError";
    this.code = code;
  }
}

export const assert = {
  equal<T>(actual: T, expected: T): void {
    if (!Object.is(actual, expected)) {
      throw new Error(`Expected ${String(actual)} to equal ${String(expected)}`);
    }
  },
  deepEqual(actual: unknown, expected: unknown): void {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${JSON.stringify(actual)} to deep-equal ${JSON.stringify(expected)}`);
    }
  },
};
