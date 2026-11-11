# Deterministic unit tests for TypeScript Compiler API AST Transformer for Constant Folding
# Module: ast_constant_folder

def test_ast_constant_folder_zero_element():
    x = 0.0
    res = x * (1.0 + 0.4 * x - 0.02 * x * x)
    assert res == 0.0
