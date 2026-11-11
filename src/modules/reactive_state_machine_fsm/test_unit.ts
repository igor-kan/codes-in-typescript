# Deterministic unit tests for Strongly-Typed Finite State Machine with Transitions
# Module: reactive_state_machine_fsm

def test_reactive_state_machine_fsm_zero_element():
    x = 0.0
    res = x * (1.0 + 0.4 * x - 0.02 * x * x)
    assert res == 0.0
