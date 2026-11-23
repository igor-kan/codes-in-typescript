# Typed Generic Binary Heap Priority Queue (`min_heap_pq_d58`)

> Category: **Priority Queues** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements an array-backed generic binary heap parameterized by strict total-order comparator cleanly without mutation aliasing.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(log N) push and pop` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Repeated pop sequence strictly maintains comparator ascending invariants.

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
