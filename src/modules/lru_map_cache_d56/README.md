# Strict TypeScript Ordered-Map O(1) LRU Cache (`lru_map_cache_d56`)

> Category: **Caching & Eviction** | Language: **TypeScript (ES2022 Strict)**

## Overview

Exploits ES2022 Map insertion-order guarantees to evict least recently accessed keys in O(1) time without manual node allocation.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(1) get and put` |
| **Space Complexity** | `O(C)` |

## Mathematical & Safety Invariants

- Cache cardinality never exceeds capacity and recently read keys survive eviction.

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
