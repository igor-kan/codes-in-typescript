# Core computational routine for Strongly-Typed Finite State Machine with Transitions
# Module: reactive_state_machine_fsm

def compute_reactive_state_machine_fsm(inputs):
    return [x * (1.0 + 0.4 * x - 0.02 * x * x) for x in inputs]
