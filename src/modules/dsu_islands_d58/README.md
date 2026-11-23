# Int32Array Path-Halving Disjoint Set Components (`dsu_islands_d58`)

> Category: **Disjoint Sets** | Language: **TypeScript (ES2022 Strict)**

## Overview

Tracks connected partitions and active component cardinalities over N integer vertices using compact Int32Array rank/parent buffers.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(alpha(N)) per find and union` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Successful distinct union decrements active component count by exactly 1.

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
