# Bottom-Up Float64Array ZKW Range Segment Tree in TypeScript (`zkw_iterative_seg_ts`)

> Category: **Range Data Structures** | Language: **TypeScript (ES2022 Strict)**

## Overview

Stores a power-of-two iterative segment tree inside a typed Float64Array eliminating recursive call stack overhead.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(log N) iterative bit-shift update & range sum` |
| **Space Complexity** | `O(2 * N) Float64Array` |

## Mathematical & Safety Invariants

- Iterative segment query equals exact slice sum.

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
