# Boundary validation and exceptional input guarding for TypeScript Type-Level Regular Expression Matcher
# Module: type_level_regex_matcher

def sanitize_type_level_regex_matcher_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
