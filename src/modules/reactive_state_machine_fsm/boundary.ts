# Boundary validation and exceptional input guarding for Strongly-Typed Finite State Machine with Transitions
# Module: reactive_state_machine_fsm

def sanitize_reactive_state_machine_fsm_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
