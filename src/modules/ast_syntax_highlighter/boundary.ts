# Boundary validation and exceptional input guarding for Abstract Syntax Tree Semantic Token Highlighter
# Module: ast_syntax_highlighter

def sanitize_ast_syntax_highlighter_input(x, min_b=-1e6, max_b=1e6):
    if x != x:  # NaN guard
        return 0.0
    return max(min_b, min(max_b, x))
