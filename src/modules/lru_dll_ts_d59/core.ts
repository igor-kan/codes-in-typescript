class Node<V> {
  prev: Node<V> | null = null;
  next: Node<V> | null = null;
  constructor(public readonly key: string, public val: V) {}
}

export class ExplicitLru<V> {
  private readonly map = new Map<string, Node<V>>();
  private readonly head: Node<V>;
  private readonly tail: Node<V>;
  private readonly cap: number;

  constructor(cap: number) {
    this.cap = cap;
    this.head = new Node<V>("__H__", undefined as unknown as V);
    this.tail = new Node<V>("__T__", undefined as unknown as V);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private unlink(n: Node<V>): void {
    if (n.prev) n.prev.next = n.next;
    if (n.next) n.next.prev = n.prev;
  }

  private pushFront(n: Node<V>): void {
    const first = this.head.next as Node<V>;
    n.prev = this.head;
    n.next = first;
    this.head.next = n;
    first.prev = n;
  }

  get(k: string): V | undefined {
    const n = this.map.get(k);
    if (!n) return undefined;
    this.unlink(n);
    this.pushFront(n);
    return n.val;
  }

  put(k: string, v: V): void {
    const cur = this.map.get(k);
    if (cur) {
      cur.val = v;
      this.unlink(cur);
      this.pushFront(cur);
      return;
    }
    if (this.map.size >= this.cap) {
      const lru = this.tail.prev as Node<V>;
      if (lru !== this.head) { this.unlink(lru); this.map.delete(lru.key); }
    }
    const nn = new Node(k, v);
    this.map.set(k, nn);
    this.pushFront(nn);
  }
}
