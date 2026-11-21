# Bounded Sliding-Window Circuit Breaker FSM (`circuit_breaker_fsm_d56`)

> Category: **Resilience Patterns** | Language: **TypeScript (ES2022 Strict)**

## Overview

Implements a deterministic Closed -> Open -> HalfOpen resilience state machine tracking consecutive failure thresholds and recovery cool-down ticks.

## Complexity Guarantees

| Metric | Asymptotic Bound |
| :--- | :--- |
| **Time Complexity** | `O(1)` |
| **Space Complexity** | `O(1)` |

## Mathematical & Safety Invariants

- Opening trips after threshold failures and closes only upon half-open success probe.

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
