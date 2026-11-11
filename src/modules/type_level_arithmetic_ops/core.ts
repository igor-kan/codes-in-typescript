# Core computational routine for TypeScript Type-Level Natural Number Arithmetic Evaluator
# Module: type_level_arithmetic_ops

def compute_type_level_arithmetic_ops(inputs):
    return [x * (1.0 + 0.4 * x - 0.02 * x * x) for x in inputs]
