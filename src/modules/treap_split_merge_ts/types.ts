export interface TreapNode {
  key: number;
  prio: number;
  size: number;
  left: TreapNode | null;
  right: TreapNode | null;
}
