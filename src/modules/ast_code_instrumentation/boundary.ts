# Boundary validation and exceptional input guarding for TypeScript Compiler API AST Transformer for Profiling
# Module: ast_code_instrumentation

def sanitize_ast_code_instrumentation_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
