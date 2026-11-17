# TypedArray Lazy-Propagation Segment Tree (Range Add & Sum) (`segment_tree_lazy_ts`)

> Category: **Range Structures** | Language: **TypeScript (ES2022 Strict)**

## Overview

Stores range aggregates and deferred deltas inside contiguous Float64Array buffers supporting O(log N) interval addition and sum queries.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(log N) lazy push & aggregate query` |
| **Space Complexity** | `O(4 * N) Float64Array` |

## Mathematical & Safety Invariants

- Lazy push maintains exact equality with explicit array mutations.

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
