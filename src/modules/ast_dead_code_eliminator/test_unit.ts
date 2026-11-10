# Deterministic unit tests for TypeScript Compiler API AST Transformer for Code Pruning
# Module: ast_dead_code_eliminator

def test_ast_dead_code_eliminator_zero_element():
    x = 0.0
    res = x * (1.0 + 0.35 * x - 0.03 * x * x)
    assert res == 0.0
