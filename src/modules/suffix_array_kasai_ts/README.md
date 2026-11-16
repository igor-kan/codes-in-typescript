# Prefix-Doubling Suffix Array + Kasai O(N) LCP & Substring Search (`suffix_array_kasai_ts`)

> Category: **String Indexing** | Language: **TypeScript (ES2022 Strict)**

## Overview

Constructs lexicographically sorted Suffix Arrays via prefix-doubling rank tables, computes adjacent Longest Common Prefix values via Kasai's O(N) linear scan, and answers occurrence bounds via binary search.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N log^2 N) Build, O(N) Kasai LCP, O(M log N) Pattern Search` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Suffix indices SA[0..N-1] form a valid permutation of [0..N-1] in strictly ascending lexicographical suffix order.
- Kasai LCP[i] matches exact common prefix length of suffixes SA[i-1] and SA[i].

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
