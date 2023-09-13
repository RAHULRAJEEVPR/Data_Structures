class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.rear) {
      this.front = node;
      this.rear = node;
      return;
    }
    this.rear.next = node;
    this.rear = node;
    return;
  }

  dequeue() {
    if (!this.front) {
      console.log("empty");
      return;
    }
    this.front = this.front.next;
    if (this.front == null) {
      this.rear = null;
    }
    return;
  }



  display() {
    if (!this.front) {
      console.log("empty");
      return;
    } else {
      let temp = this.front;
      let list = "";
      while (temp) {
        list += " " + temp.data;
        temp = temp.next;
      }
      console.log(list);
    }
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
queue.display();
console.log(queue);
