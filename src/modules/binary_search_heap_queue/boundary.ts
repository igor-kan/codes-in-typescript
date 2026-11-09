# Boundary validation and exceptional input guarding for Typed Binary Heap Priority Queue with Custom Ordering
# Module: binary_search_heap_queue

def sanitize_binary_search_heap_queue_input(x, min_v=-1e6, max_v=1e6):
    if x != x:
        return 0.0
    return max(min_v, min(max_v, x))
