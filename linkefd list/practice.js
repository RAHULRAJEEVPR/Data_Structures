class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;

    this.size = 0;
  }

  addNode(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  insertAfter(pos, data) {
    const node = new Node(data);
    if (this.head.data == pos) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let temp = this.head;
    while (temp) {
      if (temp.data == pos) {
        node.next = temp.next;
        temp.next = node;
        return;
      } else {
        temp = temp.next;
      }
    }
  }

  insertBefore(pos, data) {
    const node = new Node(data);
    if (this.head.data == pos) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let temp = this.head;
    let prev = null;

    while (temp) {
      if (temp.data == pos) {
        node.next = temp;
        prev.next = node;
        return;
      } else {
        prev = temp;
        temp = temp.next;
      }
    }
  }

  insertLast(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp) {
        if (temp.next == null) {
          temp.next = node;
          return;
        } else {
          temp = temp.next;
        }
      }
    }
  }

  deleteFirst() {
    this.head = this.head.next;
    return;
  }

  deleteLast() {
    let temp = this.head;
    while (temp) {
      if (temp.next.next == null) {
        temp.next = null;
        return;
      } else {
        temp = temp.next;
      }
    }
  }

  deleteAfterPos(pos){
    if(this.head.data==pos&&this.head.next!=null){
this.head.next=this.head.next.next
    }else{
    let    temp=this.head
    let prev=null
   while(temp){
    if(temp.data==pos&&temp.next!=null){
        prev.next=temp.next
        return;
    }else{
        prev=temp
        temp=temp.next
    }
   
    
   }
    }
  }

  display() {
    if (this.head == null) {
      console.log("empty");
    } else {
      let temp = this.head;
      while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
      }
    }
  }
}

const list = new LinkedList();

list.addNode(10);
list.addNode(20);
list.addNode(40);
list.insertBefore(40, 30);
list.insertAfter(40, 50);
list.insertLast(60);
list.deleteAfterPos(40)
list.display();
