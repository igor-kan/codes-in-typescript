# Conservative Uint32Array Count-Min Sketch in TypeScript (`count_min_sketch_ts`)

> Category: **Streaming Sketches** | Language: **TypeScript (ES2022 Strict)**

## Overview

Maintains D seeded hash rows over a contiguous Uint32Array frequency table using conservative updates to bound estimation overcount.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(D) conservative hash updates` |
| **Space Complexity** | `O(D * W) Uint32Array` |

## Mathematical & Safety Invariants

- Estimated multiplicity is strictly >= true item count.

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
