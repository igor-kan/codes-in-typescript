# Dual-BIT Range-Update Fenwick Tree & Binary-Lifted Lower Bound (`fenwick_bit_ts`)

> Category: **Range Query Structures** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements a Float64Array-backed Binary Indexed Tree supporting both point updates, dual-BIT O(log N) range additions [l, r] += delta, and O(log N) Fenwick binary lifting lower-bound search.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(log N) point/range add, range sum & order lower_bound` |
| **Space Complexity** | `O(N) Float64Array` |

## Mathematical & Safety Invariants

- rangeSum(l, r) equals naive slice sum across arbitrary sequence of range increments.
- lowerBound(target) returns minimal 0-based index idx whose prefix sum >= target.

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
