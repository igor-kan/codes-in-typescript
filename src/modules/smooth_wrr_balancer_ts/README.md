# Smooth Nginx-Style Interleaved Weighted Round-Robin Balancer (`smooth_wrr_balancer_ts`)

> Category: **Load Balancing** | Language: **TypeScript (ES2022 Strict)**

## Overview

Selects backends in smooth interleaved order proportional to static weights without bursty clustering.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N) current-weight promotion and total-weight subtraction per pick` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Over sum(weights) selections, each server i is picked exactly weight[i] times.

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
