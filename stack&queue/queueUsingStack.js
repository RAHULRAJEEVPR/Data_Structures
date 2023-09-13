class Stack {
  constructor(size) {
    this.items = [];
    this.stack = [];
  }

  push(data) {
    this.items.push(data);
  }
  pop() {
    if (this.stack.length === 0) {
      if (this.items.length == 0) {
        return;
      }
   
    while (this.items.length) {
      this.stack.push(this.items.pop());
    }
}
    return this.stack.pop()
  }
}

const stack1 = new Stack();
