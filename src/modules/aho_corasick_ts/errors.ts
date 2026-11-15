export enum AhoErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class AhoError extends Error {
  public readonly code: AhoErrorCode;
  constructor(code: AhoErrorCode, message: string) {
    super(message);
    this.name = "AhoError";
    this.code = code;
  }
}
