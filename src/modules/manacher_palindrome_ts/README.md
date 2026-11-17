# Linear-Time Manacher Longest Palindrome Radius Engine (`manacher_palindrome_ts`)

> Category: **String Algorithms** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes exact odd/even palindrome radii across sentinel-transformed character slices in O(N) time and extracts longest substring and total count.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N) mirror-accelerated radius expansion` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- Longest reported slice is strictly palindromic and count matches brute scan.

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
