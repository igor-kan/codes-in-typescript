export class LruCache<V> {
  private readonly cap: number;
  private readonly store = new Map<string, V>();

  constructor(capacity: number) {
    if (capacity <= 0) throw new Error("capacity must be positive");
    this.cap = capacity;
  }

  get(key: string): V | undefined {
    if (!this.store.has(key)) return undefined;
    const val = this.store.get(key) as V;
    this.store.delete(key);
    this.store.set(key, val);
    return val;
  }

  put(key: string, value: V): void {
    if (this.store.has(key)) {
      this.store.delete(key);
    } else if (this.store.size >= this.cap) {
      const oldest = this.store.keys().next().value;
      if (oldest !== undefined) this.store.delete(oldest);
    }
    this.store.set(key, value);
  }

  size(): number {
    return this.store.size;
  }
}
