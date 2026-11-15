export enum JumpHashErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class JumpHashError extends Error {
  public readonly code: JumpHashErrorCode;
  constructor(code: JumpHashErrorCode, message: string) {
    super(message);
    this.name = "JumpHashError";
    this.code = code;
  }
}
