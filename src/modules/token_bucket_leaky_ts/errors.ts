export enum RateLimitErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class RateLimitError extends Error {
  public readonly code: RateLimitErrorCode;
  constructor(code: RateLimitErrorCode, message: string) {
    super(message);
    this.name = "RateLimitError";
    this.code = code;
  }
}
