# Dinic Level-Graph Blocking-Flow Solver in TypeScript (`dinic_maxflow_ts`)

> Category: **Network Flow** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes maximum s-t network flow using BFS distance layering and current-arc pointer DFS blocking flow.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(V^2 * E) BFS level graph + current-arc DFS augmentation` |
| **Space Complexity** | `O(V + E)` |

## Mathematical & Safety Invariants

- Total augmented flow equals minimum s-t cut capacity.

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
