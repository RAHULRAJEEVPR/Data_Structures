class MinHeap {
  constructor(array) {
    this.heap = [];
    if (array) {
      this.Buildheap(array);
    }
  }

  Buildheap(array) {
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
      if (right <= end && this.heap[right] < this.heap[left]) {
        shift = right;
      } else {
        shift = left;
      }
      if (this.heap[curr] > this.heap[shift]) {
        [this.heap[curr], this.heap[shift]] = [this.heap[shift],this.heap[curr]];
        curr = shift;
        left = this.leftChild(curr);
      } else {
        return;
      }
    }
  }
  shiftUp(curr) {
    let parent = this.parent(curr);
    while (curr > 0 && this.heap[parent] > this.heap[curr]) {
      [this.heap[curr], this.heap[parent]] = [
        this.heap[parent],
        this.heap[curr],
      ];
      curr = parent;
      parent = this.parent(curr);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  peek() {
    return this.heap[0];
  }
  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this.shiftDown(0);
  }
  sort(){
    for(let i=this.heap.length-1;i>=0;i--){
        this.sorting(i)
    }
}

sorting(curr){
[this.heap[0],this.heap[curr]] = [this.heap[curr],this.heap[0]]
console.log(this.heap[curr]);
this.heap.pop()
this.shiftDown(0)
}
heapSort(){
  while(this.heap.length){
      [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
console.log(this.heap.pop());
this.shiftDown(0)
  }
}
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return (i * 2 )+ 1;
  }
  rightChild(i) {
    return (i * 2) + 2;
  }

  display() {
    console.log(this.heap);
  }
}
const array = [7, 5, 6, 3, 8, 9, 10, 12, 32, 2, 23];
const array1=[6,2,8]
const heap = new MinHeap(array);
heap.display()

heap.heapSort()