export interface TopoSchedule {
  readonly isAcyclic: boolean;
  readonly order: readonly string[];
  readonly waves: readonly (readonly string[])[];
  readonly blockedNodes: readonly string[];
}
