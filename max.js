class MaxHeap {
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
            if (this.heap[parentIndex] < this.heap[index]) {
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
            let largest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex;
            }

            if (largest !== index) {
                this.swap(index, largest);
                index = largest;
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

    // Function to remove and return the maximum element from the heap
    extractMax() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    // Function to get the maximum element from the heap without removing it
    peek() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty");
        }
        return this.heap[0];
    }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.insert(17);

console.log("Max element:", maxHeap.peek()); // Output: 20
console.log("Extracted max element:", maxHeap.extractMax()); // Output: 20
console.log("Max element after extraction:", maxHeap.peek()); // Output: 17
