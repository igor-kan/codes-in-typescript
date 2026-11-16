# Linear O(N + M) Z-Algorithm Matcher & Minimal Period Detector (`z_algorithm_pattern_ts`)

> Category: **String Searching** | Language: **TypeScript (ES2022 Strict)**

## Overview

Computes Gusfield Z-arrays over TypeScript UTF-16 code units via Int32Array buffers, providing exact pattern occurrence indices and shortest primitive repeating string period extraction.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N + M)` |
| **Space Complexity** | `O(N + M)` |

## Mathematical & Safety Invariants

- Matches exact indices where text.startsWith(pattern, i) across all overlapping patterns.
- Minimal string period p divides text or represents shortest prefix period repetition.

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
