# HyperLogLog Typed-Register Distinct Counter in TypeScript (`hyperloglog_sketch_ts`)

> Category: **Streaming Algorithms** | Language: **TypeScript (ES2022 Strict)**

## Overview

Estimates multiset distinct cardinality using BigInt SplitMix64 mixing, bit-rank extraction over Uint8Array registers, and Flajolet bias/LinearCounting adjustments.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(1) observe, O(2^p) count & merge` |
| **Space Complexity** | `O(2^p) Uint8Array bytes` |

## Mathematical & Safety Invariants

- Merging sketches obeys commutativity and idempotency.
- Register count equals exactly 2^precision.

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
