# Invertible Burrows-Wheeler Block Rotation Transform (`rle_bwt_transform_d57`)

> Category: **Block Compression** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes the forward Burrows-Wheeler last-column character transform + primary index and reconstructs exact input via stable LF-mapping.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N^2 log N) forward, O(N log N) inverse LF-mapping` |
| **Space Complexity** | `O(N)` |

## Mathematical & Safety Invariants

- BWT encode -> inverse LF reconstruct recovers any ASCII string identically.

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
