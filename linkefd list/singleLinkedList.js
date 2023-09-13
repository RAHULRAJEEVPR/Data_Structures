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
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //......add node to starting of the list
  prepend(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //.. adding new nodes at end
  addNode(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }


  //inserAfter
  insertAfter(pos,data){
    const node = new Node(data)
    if(this.head.data==pos){
        node.next=this.head
        this.head=node
        return;
    }
    let temp=this.head
      while(temp){
        if(temp.data==pos){
            node.next=temp.next
            temp.next=node
            return;
        }else{
            temp=temp.next
        }
      }

}

  insertBefore(pos,data){
      let node=new Node(data)
      let temp= this.head
let prev=null
      while(temp !=null && temp.data!=pos){
       prev=temp
        temp=temp.next
      }
      if(temp==null){
     return;  
      }
      if(temp==this.head){
       node.next=temp
       this.head=node
        return;
      }
node.next=temp
prev.next=node
      
  }


  


//display elements in linked list
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
// delete by value
  delete(data) {
    // set temp variable as the head of the linked list
    let temp = this.head;
    // set prev variable as null
    let prev = null;
    // check if the head is not null and contains the data to be deleted
    if (temp.data != null && temp.data == data) {
      // if yes, set the next node as the new head
      this.head = temp.next;
      return;
    } else {
      // if not, iterate through the linked list to find the node with the data to be deleted
      while (temp != null && temp.data != data) {
        // set prev to the current node
        prev = temp;
        // move temp to the next node
        temp = temp.next;
      }
      // if the data is not found, return
      if (temp == null) {
        return;
      }
      // if the data is found in the tail node, update the tail and set its next node to null
      if (temp == this.tail) {
        this.tail = prev;
        this.tail.next = null;
        return;
      }
      // if the data is found in any other node, update the previous node's next to the next node of the current node
      prev.next = temp.next;
    }
  }

  //printing linked list
  print() {
    if (this.head == null) {
      console.log("list is empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += ` ${current.data}`;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
// console.log("empty", list.isEmpty());
// console.log("list Size", list.getSize());

// list.prepend(10);

// list.print()

list.addNode(10);
list.addNode(100);
list.addNode(50);
list.addNode(200);
list.display();
// list.delete(100);
// list.insertAfter(10,2)

list.insertBefore(200,5);

list.print();