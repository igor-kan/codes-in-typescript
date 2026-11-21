# Myers Minimum Edit Distance Line Diff Engine (`myers_shortest_edit_d56`)

> Category: **Diffing Algorithms** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes exact shortest edit script lengths between token arrays using Eugene Myers O(ND) diagonal-frontier dynamic programming.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O((N + M) * D)` |
| **Space Complexity** | `O(N + M)` |

## Mathematical & Safety Invariants

- Diff edit cost is symmetric and zero iff sequences are identical.

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
