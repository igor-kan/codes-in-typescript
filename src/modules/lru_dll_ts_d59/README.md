# Doubly-Linked List + HashMap Explicit O(1) LRU Cache (`lru_dll_ts_d59`)

> Category: **Data Structures** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements explicit sentinel head/tail doubly-linked LRU node pointers paired with Map indexing without relying on Map re-insertion side effects.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(1) explicit pointer relink` |
| **Space Complexity** | `O(C)` |

## Mathematical & Safety Invariants

- Recency order tracks most-recently accessed keys ahead of LRU victim evictions.

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
