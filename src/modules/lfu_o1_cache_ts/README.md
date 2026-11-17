# Strict O(1) Frequency-Bucket LFU Cache in TypeScript (`lfu_o1_cache_ts`)

> Category: **Caching** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements strict O(1) get/put LFU eviction backed by frequency-indexed Map<number, Set<number>> ordered buckets leveraging JS Set FIFO ordering.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(1) Map + Set insertion-ordered LFU eviction` |
| **Space Complexity** | `O(Capacity)` |

## Mathematical & Safety Invariants

- Evicted key is always an oldest entry from minFreq bucket.

## Module Architecture

| File | Lifecycle Role |
| :--- | :--- |
| `types.ts` | Stage 01 |
| `errors.ts` | Stage 02 |
| `interface.ts` | Stage 03 |
| `core.ts` | Stage 04 |
| `validation.ts` | Stage 05 |
| `fast_path.ts` | Stage 06 |
| `concurrent.ts` | Stage 07 |
| `invariants.ts` | Stage 08 |
| `unit_tests.ts` | Stage 09 |
| `property_tests.ts` | Stage 10 |
| `benchmark.ts` | Stage 11 |
| `README.md` | Stage 12 |

## Verification & Execution Example

```text
tsc --strict --target ES2022 --module NodeNext --moduleResolution NodeNext *.ts --outDir /tmp/ts_build && node /tmp/ts_build/unit_tests.js
```

---
© 2026 Igor Kan
