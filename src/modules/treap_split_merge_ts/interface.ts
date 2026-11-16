export interface OrderStatisticSet {
  insert(key: number): boolean;
  erase(key: number): boolean;
  kthSmallest(k: number): number;
  size(): number;
}
