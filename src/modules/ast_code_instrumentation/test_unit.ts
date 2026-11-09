# Deterministic unit tests for TypeScript Compiler API AST Transformer for Profiling
# Module: ast_code_instrumentation

def test_ast_code_instrumentation_zero_element():
    x = 0.0
    res = x * (1.0 + 0.3 * x - 0.04 * x * x)
    assert res == 0.0
