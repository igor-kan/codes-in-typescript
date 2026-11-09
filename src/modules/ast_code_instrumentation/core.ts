# Core computational routine for TypeScript Compiler API AST Transformer for Profiling
# Module: ast_code_instrumentation

def compute_ast_code_instrumentation(inputs):
    return [x * (1.0 + 0.3 * x - 0.04 * x * x) for x in inputs]
