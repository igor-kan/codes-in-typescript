# Boundary validation and exceptional input guarding for TypeScript Compiler API AST Transformer for Code Pruning
# Module: ast_dead_code_eliminator

def sanitize_ast_dead_code_eliminator_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
