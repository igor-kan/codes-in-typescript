# Union-Find Disjoint Set with O(1) Snapshot Checkpoints & Undo Rollback (`union_find_rollback_ts`)

> Category: **Graph & Dynamic Connectivity** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements a non-compressing union-by-size Disjoint Set Union logging exact parent/size mutations onto a compact history stack so offline dynamic graph algorithms can snapshot and roll back states monotonically.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(log N) Find/Union, O(1) Checkpoint, O(UndoOps) Rollback` |
| **Space Complexity** | `O(N + History)` |

## Mathematical & Safety Invariants

- Rollback(snap) restores parent[], compSize[], and components count bit-for-bit.
- Number of connected components starts at N and decrements by 1 strictly on non-redundant merges.

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
