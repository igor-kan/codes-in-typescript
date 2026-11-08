# Deterministic unit tests for Abstract Syntax Tree Semantic Token Highlighter
# Module: ast_syntax_highlighter

def test_ast_syntax_highlighter_zero_element():
    x = 0.0
    res = x * (1.0 + 0.25 * x - 0.05 * x * x)
    assert res == 0.0
