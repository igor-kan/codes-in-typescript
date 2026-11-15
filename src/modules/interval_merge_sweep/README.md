# Interval Union, Difference Subtraction & Sweep-Line Occupancy (`interval_merge_sweep`)

> Category: **Geometric & Temporal Ranges** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes sorted disjoint interval unions, exact interval set differences (A \ B), and peak sweep-line overlapping occupancy across half-open numeric ranges.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N log N) sort + O(N) sweep` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Union output intervals satisfy strictly end_i < start_{i+1}.
- Union length minus subtracted B overlap equals exact covered length of A \ B.

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
