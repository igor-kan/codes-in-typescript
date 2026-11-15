# Dijkstra Non-Negative Shortest Path with Explicit Binary Min-Heap (`dijkstra_binary_heap`)

> Category: **Graph Shortest Paths** | Language: **TypeScript (ES2022 Strict)**

## Overview

Solves single-source shortest paths over sparse weighted digraphs using an explicit binary min-heap priority queue, predecessor parent reconstruction, and optimality validation.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O((V + E) log V)` |
| **Space Complexity** | `O(V + E)` |

## Mathematical & Safety Invariants

- All edge weights must be strictly non-negative.
- Every edge (u, v, w) satisfies dist[u] + w >= dist[v] at termination.

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
