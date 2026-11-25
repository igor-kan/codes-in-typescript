# Eugene Myers O(ND) Shortest Edit Script Diff Length Solver (`myers_diff_ts_d60`)

> Category: **Diff & Patch Engines** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes the minimal edit distance D (insertions + deletions) along Myers diagonal k = x - y frontiers between two token arrays.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O((N + M) * D) diagonal frontier exploration` |
| **Space Complexity** | `O(D)` |

## Mathematical & Safety Invariants

- Myers D equals |A| + |B| - 2 * LCS(A, B) for every pair of sequences.

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
