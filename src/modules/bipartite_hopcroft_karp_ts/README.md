# Hopcroft-Karp O(E sqrt(V)) Maximum Bipartite Matching (`bipartite_hopcroft_karp_ts`)

> Category: **Graph Matching** | Language: **TypeScript (ES2022 Strict)**

## Overview

Finds maximum cardinality matching in bipartite graphs using simultaneous shortest-augmenting-path layers via BFS and DFS blocker passes.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(E * sqrt(V)) layered BFS + multi-path DFS` |
| **Space Complexity** | `O(V + E)` |

## Mathematical & Safety Invariants

- All matched left/right assignments form pairwise disjoint bijections.

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
