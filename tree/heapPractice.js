class HEAP {
  constructor(array) {
    this.heap = [];
    if (array) {
      this.buildHeap(array);
    }
  }

  buildHeap(array) {
    this.heap = array;
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  shiftDown(curr) {
    let end = this.heap.length - 1;
    let left = this.leftChild(curr);
    while (left <= end) {
      let right = this.rightChild(curr);
      let shift;
      if (right <= end && this.heap[left] < this.heap[right]) {
        shift = left;
      } else {
        shift = right;
      }
      if (this.heap[shift] < this.heap[curr]) {
        [this.heap[shift], this.heap[curr]] = [
          this.heap[curr],
          this.heap[shift],
        ];
        curr = shift;
        left = this.leftChild(curr);
      } else {
        return;
      }
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  shiftUp(curr) {
    let parent = this.parent(curr);
    while (curr > 0 && this.heap[parent] > this.heap[curr]) {
      [this.heap[parent], this.heap[curr]] = [
        this.heap[curr],
        this.heap[parent],
      ];
      curr = parent;
      parent = this.parent(curr);
    }
  }

  sorting(curr){
    [this.heap[0],this.heap[curr]]=[this.heap[curr],this.heap[0]]
    console.log(this.heap[curr]);
    this.heap.pop()
    this.shiftDown(0)
  }

  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  display() {
    console.log(this.heap);
  }
}

let array = [4, 5, 3, 56, 6, 71, 25, 64, 28];
const heap = new HEAP(array);
heap.insert(1000);
heap.insert(9);
heap.display();
