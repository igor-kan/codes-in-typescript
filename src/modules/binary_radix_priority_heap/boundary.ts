# Boundary validation and exceptional input guarding for Typed Binary Radix Heap Priority Queue with Custom Order
# Module: binary_radix_priority_heap

def sanitize_binary_radix_priority_heap_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
