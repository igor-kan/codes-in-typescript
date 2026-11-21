# RFC 6901 Immutable JSON Pointer Resolver (`json_pointer_patch_d56`)

> Category: **Structured Querying** | Language: **TypeScript (ES2022 Strict)**

## Overview

Evaluates RFC 6901 unescaped (~0 / ~1) JSON Pointer lookups safely across nested TypeScript objects and arrays without prototype pollution.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(|path|)` |
| **Space Complexity** | `O(1)` |

## Mathematical & Safety Invariants

- Escaped ~1 and ~0 segments resolve cleanly and missing paths return undefined.

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
