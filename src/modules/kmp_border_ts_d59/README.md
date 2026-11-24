# KMP Prefix Border Array & Matcher Engine (`kmp_border_ts_d59`)

> Category: **String Matching** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes Knuth-Morris-Pratt border array pi and finds exact non-overlapping occurrence indices across strings cleanly.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(|T| + |P|)` |
| **Space Complexity** | `O(|P|)` |

## Mathematical & Safety Invariants

- Prefix border lengths strictly satisfy 0 <= pi[i] <= i cleanly.

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
