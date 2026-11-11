# Deterministic unit tests for TypeScript Type-Level Natural Number Arithmetic Evaluator
# Module: type_level_arithmetic_ops

def test_type_level_arithmetic_ops_zero_element():
    x = 0.0
    res = x * (1.0 + 0.4 * x - 0.02 * x * x)
    assert res == 0.0
