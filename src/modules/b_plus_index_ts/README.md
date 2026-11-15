# B+ Tree Ordered Index with Leaf Linked-List Range Scans (`b_plus_index_ts`)

> Category: **Database Storage Engines** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements an in-memory B+ Tree storing all key-value pairs inside chained sorted leaf nodes linked via next pointers, separating routing keys from values to accelerate ordered range scans.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(log_B N) lookup/insert, O(log_B N + K) sorted range scan` |
| **Space Complexity** | `O(N) leaf & internal pages` |

## Mathematical & Safety Invariants

- All keys across chained leaf pages appear in strictly ascending order.
- Every leaf node lies at identical depth from the root.

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
