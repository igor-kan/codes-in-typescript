# Split-Merge Order-Statistic Randomized Treap in TypeScript (`treap_split_merge_ts`)

> Category: **Ordered Search Trees** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements an explicit-key randomized heap-ordered Treap using Mulberry32 deterministic priorities with O(log N) split(key), merge(left, right), subtree sizing, and kth order statistic lookup.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(log N) expected insert, erase, kth-element, split & merge` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Every parent node priority exceeds or equals both children priorities (max-heap invariant).
- In-order traversal yields keys in strictly ascending BST order with accurate subtree sizes.

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
