# Earley Chart Recognizer for Left-Recursive Context-Free Grammars (`earley_cfg_parse_ts_d60`)

> Category: **Formal Languages & Parsing** | Language: **TypeScript (ES2022 Strict)**

## Overview

Executes Earley predictor, scanner, and completer transitions with fixed-point chart saturation to recognize arbitrary context-free token sequences.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(N^3) general CFG, O(N^2) unambiguous, O(N) LR grammars` |
| **Space Complexity** | `O(N^2) state sets` |

## Mathematical & Safety Invariants

- Recognizes arithmetic expressions with left-recursive production rules.

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
