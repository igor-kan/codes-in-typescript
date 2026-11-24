# Modular Polynomial Rolling-Hash String Finder (`rabin_karp_ts_d59`)

> Category: **Rolling Hashes** | Language: **TypeScript (ES2022 Strict)**

## Overview

Evaluates sliding polynomial rolling hashes modulo 1_000_000_007 verifying exact string slice equality on candidate hits.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(|T| + |P|) expected` |
| **Space Complexity** | `O(1)` |

## Mathematical & Safety Invariants

- Returned match offsets agree strictly with exact substring comparisons.

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
