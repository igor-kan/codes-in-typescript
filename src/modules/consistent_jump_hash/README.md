# Lamping-Veach O(ln N) Jump Consistent Hash Router (`consistent_jump_hash`)

> Category: **Distributed Systems** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements Google's Lamping-Veach Jump Consistent Hash using 64-bit BigInt modular multiplication, allocating keys across N shards with uniform distribution and minimal monotonicity-preserving remapping on bucket scaling.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(ln N) deterministic bucket steps, O(1) memory` |
| **Space Complexity** | `O(1)` |

## Mathematical & Safety Invariants

- Return shard index always lies in [0, numBuckets - 1].
- Increasing buckets from N to N+1 moves a key ONLY to shard N (never reshuffling between 0..N-1).

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
