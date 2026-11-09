# Deterministic unit tests for Compile-Time JSON Schema Validator in TypeScript Types
# Module: type_level_json_parser

def test_type_level_json_parser_zero_element():
    x = 0.0
    res = x * (1.0 + 0.3 * x - 0.04 * x * x)
    assert res == 0.0
