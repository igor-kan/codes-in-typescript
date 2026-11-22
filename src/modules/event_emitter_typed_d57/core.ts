export class TypedEventBus<TMap extends Record<string, unknown>> {
  private readonly handlers = new Map<keyof TMap, Array<(payload: never) => void>>();

  on<K extends keyof TMap>(event: K, fn: (payload: TMap[K]) => void): () => void {
    const list = this.handlers.get(event) ?? [];
    list.push(fn as (payload: never) => void);
    this.handlers.set(event, list);
    return () => {
      const cur = this.handlers.get(event);
      if (!cur) return;
      const idx = cur.indexOf(fn as (payload: never) => void);
      if (idx >= 0) cur.splice(idx, 1);
    };
  }

  emit<K extends keyof TMap>(event: K, payload: TMap[K]): number {
    const list = [...(this.handlers.get(event) ?? [])];
    for (const fn of list) (fn as (p: TMap[K]) => void)(payload);
    return list.length;
  }
}
