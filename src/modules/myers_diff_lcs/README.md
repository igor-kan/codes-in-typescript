# Myers O((N+M)D) Minimal Edit Script Diff & Patch Applier (`myers_diff_lcs`)

> Category: **Sequence & Text Algorithms** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes shortest edit script sequences (Equal, Insert, Delete) between arbitrary arrays using Eugene Myers diagonal frontier exploration and backward trace reconstruction.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O((N + M) * D) for edit distance D` |
| **Space Complexity** | `O(D * (N + M)) trace vectors` |

## Mathematical & Safety Invariants

- Applying generated edit operations to source produces target identically element-for-element.
- Edit script cost (Insert + Delete count) equals the exact shortest edit distance.

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
