export interface BPlusLeaf<K, V> {
  readonly isLeaf: true;
  keys: K[];
  values: V[];
  next: BPlusLeaf<K, V> | null;
}

export interface BPlusInternal<K, V> {
  readonly isLeaf: false;
  keys: K[];
  children: BPlusNode<K, V>[];
}

export type BPlusNode<K, V> = BPlusLeaf<K, V> | BPlusInternal<K, V>;
