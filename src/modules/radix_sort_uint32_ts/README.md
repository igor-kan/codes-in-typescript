# LSB 8-Bit Counting Radix Sort over Uint32Array (`radix_sort_uint32_ts`)

> Category: **Sorting** | Language: **TypeScript (ES2022 Strict)**

## Overview

Sorts unsigned 32-bit integers cleanly using 4 stable byte-bucket counting passes alternating between primary and scratch Uint32Array buffers.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(4 * (N + 256)) non-comparative linear sort` |
| **Space Complexity** | `O(N + 256) typed scratch` |

## Mathematical & Safety Invariants

- Output order is strictly ascending unsigned ints matching reference JS numeric sort.

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
