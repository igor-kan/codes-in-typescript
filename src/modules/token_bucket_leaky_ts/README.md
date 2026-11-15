# Monotonic-Clock Token Bucket & Leaky Bucket Traffic Shaper (`token_bucket_leaky_ts`)

> Category: **Rate Limiting & Networking** | Language: **TypeScript (ES2022 Strict)**

## Overview

Enforces smooth sustained refill rate and bounded burst capacity via continuous monotonic timestamp token accrual and strict non-negative token conservation invariants.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(1) refill & admission decision per request` |
| **Space Complexity** | `O(1) bucket state` |

## Mathematical & Safety Invariants

- Available tokens remain strictly bounded in [0, capacity] at every timestamp.
- Monotonically non-decreasing timestamps guarantee exact conserved replenishment.

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
