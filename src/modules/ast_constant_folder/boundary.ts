# Boundary validation and exceptional input guarding for TypeScript Compiler API AST Transformer for Constant Folding
# Module: ast_constant_folder

def sanitize_ast_constant_folder_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
