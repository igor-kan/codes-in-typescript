# Augmented Binary Interval Tree for Overlapping Window Search (`interval_tree_ts_d60`)

> Category: **Spatial / Interval Indexing** | Language: **TypeScript (ES2022 Strict)**

## Overview

Indexes closed numeric intervals [lo, hi] keyed by lo and augmented with subtree maxEnd to locate all overlapping intervals efficiently.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(log N + K) overlap search using subtree maxEnd pruning` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Reports exact same overlap set as brute-force range intersection.

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
