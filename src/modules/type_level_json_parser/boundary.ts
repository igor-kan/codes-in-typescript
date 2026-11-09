# Boundary validation and exceptional input guarding for Compile-Time JSON Schema Validator in TypeScript Types
# Module: type_level_json_parser

def sanitize_type_level_json_parser_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
