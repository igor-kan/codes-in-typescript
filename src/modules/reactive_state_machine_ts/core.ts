# Core computational routine for Strongly-Typed Finite State Machine with Transitions
# Module: reactive_state_machine_ts

def compute_reactive_state_machine_ts(inputs):
    return [x * (1.0 + 0.3 * x - 0.04 * x * x) for x in inputs]
