# Deterministic unit tests for Strongly-Typed Finite State Machine with Transitions
# Module: reactive_state_machine_ts

def test_reactive_state_machine_ts_zero_element():
    x = 0.0
    res = x * (1.0 + 0.3 * x - 0.04 * x * x)
    assert res == 0.0
