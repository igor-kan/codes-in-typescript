# Andrew Monotone Chain 2D Convex Hull & Perimeter (`convex_hull_monotone_ts`)

> Category: **Computational Geometry** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes the tightest counterclockwise convex polygon boundary over planar point sets using Andrew's monotone chain cross-product test.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N log N) coordinate sort + O(N) stack scan` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- All output polygon turns are strictly counterclockwise.

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
