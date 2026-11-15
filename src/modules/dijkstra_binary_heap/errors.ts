export enum DijkstraErrorCode {
  INVALID_INPUT = "INVALID_INPUT",
  OUT_OF_BOUNDS = "OUT_OF_BOUNDS",
  EMPTY_INPUT = "EMPTY_INPUT",
  INVARIANT_VIOLATION = "INVARIANT_VIOLATION",
}

export class DijkstraError extends Error {
  public readonly code: DijkstraErrorCode;
  constructor(code: DijkstraErrorCode, message: string) {
    super(message);
    this.name = "DijkstraError";
    this.code = code;
  }
}
