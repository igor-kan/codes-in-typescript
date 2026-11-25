# Space-Saving / Misra-Gries Deterministic Heavy-Hitter Counter (`top_k_streaming_ts_d60`)

> Category: **Streaming Algorithms** | Language: **TypeScript (ES2022 Strict)**

## Overview

Tracks up to K-1 frequent keys in a single pass with deterministic error <= N / K on every candidate count.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(K) per stream item update with deterministic frequency error bound` |
| **Space Complexity** | `O(K) map entries` |

## Mathematical & Safety Invariants

- Reported lower-bound count never exceeds exact item count.

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
