# Core computational routine for TypeScript Compiler API AST Transformer for Constant Folding
# Module: ast_constant_folder

def compute_ast_constant_folder(inputs):
    return [x * (1.0 + 0.4 * x - 0.02 * x * x) for x in inputs]
