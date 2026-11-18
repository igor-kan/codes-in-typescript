# Knuth-Yao Quadrangle-Inequality Optimal Binary Search Tree DP (`knuth_yao_obst_dp_ts`)

> Category: **Dynamic Programming Optimization** | Language: **TypeScript (ES2022 Strict)**

## Overview

Uses Knuth's root monotonicity opt[i][j-1] <= opt[i][j] <= opt[i+1][j] to compute optimal binary search tree cost in O(N^2).

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N^2) monotonic root-table interval DP` |
| **Space Complexity** | `O(N^2)` |

## Mathematical & Safety Invariants

- Optimal cost matches cubic interval DP minimum.

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
