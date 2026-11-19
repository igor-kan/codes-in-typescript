# Binary-Lifted Fenwick Tree K-th Order Statistic in TypeScript (`fenwick_order_kth_ts`)

> Category: **Order-Statistic Structures** | Language: **TypeScript (ES2022 Strict)**

## Overview

Answers K-th smallest frequency lookup over dynamic integer multisets in a single O(log N) binary lifting sweep.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(log N) BIT add & binary-lifted lower_bound` |
| **Space Complexity** | `O(N) Int32Array` |

## Mathematical & Safety Invariants

- Kth returns smallest index with cumulative sum >= k.

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
