Heaps are a special type of binary tree that satisfy the heap property. There are two types of heaps: min-heaps and max-heaps. In a min-heap, the value of each node is less than or equal to the values of its children, making the smallest element the root. In a max-heap, the value of each node is greater than or equal to the values of its children, making the largest element the root. Heaps are commonly used in priority queues and for sorting algorithms.

This repository contains JavaScript implementations for both min-heaps and max-heaps, including basic operations such as insertion, extraction of the root element, and retrieval of the root element without removal.

Features
MinHeap
Insertion (insert): Adds a new element to the min-heap while maintaining the heap property.
Extraction (extractMin): Removes and returns the minimum element from the min-heap while maintaining the heap property.
Peek (peek): Returns the minimum element without removing it from the min-heap.
MaxHeap
Insertion (insert): Adds a new element to the max-heap while maintaining the heap property.
Extraction (extractMax): Removes and returns the maximum element from the max-heap while maintaining the heap property.
Peek (peek): Returns the maximum element without removing it from the max-heap.


Conclusion
This repository provides JavaScript implementations for both min-heaps and max-heaps. These data structures are essential for efficiently managing priority queues and for various sorting algorithms. The provided operations ensure that the heap property is maintained at all times, allowing for quick insertion and extraction of elements.