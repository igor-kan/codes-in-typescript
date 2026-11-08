# Boundary validation and exceptional input guarding for Type-Level Merge Sort on TypeScript Tuple Types
# Module: type_level_tuple_sort

def sanitize_type_level_tuple_sort_input(x, min_b=-1e6, max_b=1e6):
    if x != x:  # NaN guard
        return 0.0
    return max(min_b, min(max_b, x))
