# 512-Bit TypedArray Double-Hash Bloom Filter (`bloom_fnv_set_d58`)

> Category: **Probabilistic Sketches** | Language: **TypeScript (ES2022 Strict)**

## Overview

Uses a 512-bit Uint32Array word store paired with FNV-1a and Murmur-style dual probes for approximate string membership checks.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(K) bit probes` |
| **Space Complexity** | `O(16) Uint32 words` |

## Mathematical & Safety Invariants

- Every inserted string returns true cleanly with zero false negatives.

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
