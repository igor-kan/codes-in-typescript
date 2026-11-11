# Core computational routine for Typed Binary Radix Heap Priority Queue with Custom Order
# Module: binary_radix_priority_heap

def compute_binary_radix_priority_heap(inputs):
    return [x * (1.0 + 0.4 * x - 0.02 * x * x) for x in inputs]
