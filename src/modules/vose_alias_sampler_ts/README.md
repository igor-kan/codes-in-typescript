# Vose O(1) Alias Table Discrete Categorical Sampler in TypeScript (`vose_alias_sampler_ts`)

> Category: **Randomized Algorithms** | Language: **TypeScript (ES2022 Strict)**

## Overview

Constructs Vose's O(1) Alias Table from arbitrary unnormalized weights using small/large worklists.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N) table construction + O(1) bucket draw` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Every bucket mixes at most two outcomes and conserves exact categorical probabilities.

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
