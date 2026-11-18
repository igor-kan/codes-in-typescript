# Rubinchik-Shur Eertree Palindromic Automaton in TypeScript (`eertree_palindrome_ts`)

> Category: **String Automata** | Language: **TypeScript (ES2022 Strict)**

## Overview

Maintains two roots (length -1 imaginary and length 0 empty) and palindrome suffix links to count all distinct palindromic substrings online in O(N).

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N) online distinct palindrome insertion & suffix-link traversal` |
| **Space Complexity** | `O(N) states` |

## Mathematical & Safety Invariants

- Number of created non-root states equals exact number of distinct palindromic substrings.

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
