# Last-Writer-Wins Element-Set CRDT Register Map (`crdt_lww_map_d56`)

> Category: **Distributed State** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements an idempotent, commutative, associative Last-Writer-Wins replicated register map with deterministic node-ID tie-breaking.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N) deterministic state merge` |
| **Space Complexity** | `O(K)` |

## Mathematical & Safety Invariants

- Merge satisfies merge(A, B) == merge(B, A) and merge(A, A) == A.

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
