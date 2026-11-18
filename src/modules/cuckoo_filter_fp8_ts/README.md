# 4-Slot 8-Bit Fingerprint Cuckoo Filter in TypeScript (`cuckoo_filter_fp8_ts`)

> Category: **Probabilistic Filters** | Language: **TypeScript (ES2022 Strict)**

## Overview

Stores 8-bit fingerprints in 4-slot buckets inside a flat Uint8Array using partial-key cuckoo hashing.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(1) dual-bucket lookup, insert, and delete` |
| **Space Complexity** | `O(B * 4) Uint8Array` |

## Mathematical & Safety Invariants

- Inserted keys always test positive and can be removed cleanly.

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
