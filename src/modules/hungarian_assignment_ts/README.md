# Kuhn-Munkres O(N^3) Hungarian Minimum-Cost Bipartite Assignment (`hungarian_assignment_ts`)

> Category: **Combinatorial Optimization** | Language: **TypeScript (ES2022 Strict)**

## Overview

Solves dense minimum-cost perfect bipartite assignment over N x N cost matrices in O(N^3) time.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N^3) dual-potential augmenting column match` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Primal matched cost equals exact negated dual potential -v[0].

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
