class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Function to get the index of the parent node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Function to get the index of the left child node
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Function to get the index of the right child node
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Function to swap two elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Function to ensure the heap property is maintained from bottom to top
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Function to ensure the heap property is maintained from top to bottom
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    // Function to insert a new element into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Function to remove and return the minimum element from the heap
    extractMin() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // Function to get the minimum element from the heap without removing it
    peek() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }
        return this.heap[0];
    }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(17);

console.log("Min element:", minHeap.peek()); // Output: 10
console.log("Extracted min element:", minHeap.extractMin()); // Output: 10
console.log("Min element after extraction:", minHeap.peek()); // Output: 15
