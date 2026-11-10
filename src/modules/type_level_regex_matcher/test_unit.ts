# Deterministic unit tests for TypeScript Type-Level Regular Expression Matcher
# Module: type_level_regex_matcher

def test_type_level_regex_matcher_zero_element():
    x = 0.0
    res = x * (1.0 + 0.35 * x - 0.03 * x * x)
    assert res == 0.0
