export interface EventSubscription {
  readonly topic: string;
  unsubscribe(): void;
}

export const MODULE_SLUG = "event_emitter_typed_d57" as const;
