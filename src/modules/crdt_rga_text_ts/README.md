# Replicated Growable Array (RGA) Sequence CRDT for Collaborative Text (`crdt_rga_text_ts`)

> Category: **Distributed Systems & CRDTs** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements Roh et al.'s Replicated Growable Array sequence CRDT with Lamport (counter, siteId) vertex IDs, deterministic total tie-break ordering on concurrent inserts at identical anchors, and tombstones.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N) ordered splice, O(N) total-order converge` |
| **Space Complexity** | `O(Operations)` |

## Mathematical & Safety Invariants

- Replaying arbitrary permutations of causally ready insert/delete operations converges to identical visible text.
- Tombstone deletion preserves causal parent anchors cleanly.

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
