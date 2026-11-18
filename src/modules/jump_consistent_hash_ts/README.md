# BigInt 64-Bit Lamping-Veach Jump Consistent Hash in TypeScript (`jump_consistent_hash_ts`)

> Category: **Distributed Hashing** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements Lamping and Veach's 64-bit linear congruential Jump Consistent Hash using ES2022 BigInt arithmetic.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(ln B) deterministic bucket jump` |
| **Space Complexity** | `O(1)` |

## Mathematical & Safety Invariants

- Bucket index lies in [0, numBuckets) and resize from B to B+1 only moves keys landing in B.

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
