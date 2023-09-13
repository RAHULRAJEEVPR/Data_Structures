class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    } else {
      node.prev = null;
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      return;
    }
  }

  addLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr) {
        if (curr.next == null) {
          node.prev = curr;
          curr.next = node;
          this.tail = node;
          return;
        } else {
          curr = curr.next;
        }
      }
    }
  }

  insertAfter(pos, data) {
    const node = new Node(data);
    if (!this.head) {
      console.log("empty");
    }

    let curr = this.head;
    while (curr) {
      if (curr.data == pos) {
        if (curr.next == null) {
          this.tail = node;
        } else {
          curr.next.prev = node;
        }
        node.next = curr.next;
        node.prev = curr;
        curr.next = node;
        return;
      } else {
        curr = curr.next;
      }
    }
  }

  deleteAfter(pos) {
    if (!this.head) {
      return;
    }
    let curr = this.head;
    while (curr) {
      if (curr.data == pos) {
        if (curr.next == null) {
          return;
        } else {
          curr.next = curr.next.next;
          if (curr.next == null) {
            this.tail = curr;
          }
          return;
        }
      } else {
        curr = curr.next;
      }
    }
  }

  deleteByValue(val) {
    if (!this.head) {
      return;
    }
    if (this.head.data == val) {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    let temp = this.head;
    while (temp) {
      if (temp.data == val) {
        if (temp.next == null) {
          temp.prev.next = null;
          this.tail = temp;
          return;
        } else {
          temp.prev.next = temp.next;
          temp.next.prev = temp.prev;
          return;
        }
      } else {
        temp = temp.next;
      }
    }
  }

  deleteTarget(val) {
    console.log("hai");
    if (!this.head) {
      return;
    }
    let temp = this.head;

    while (temp) {
   
      if (temp.data == val && temp.prev == null) {
     
        this.head.next.prev = null;
        this.head = this.head.next;
        temp = this.head;
        continue;
      }
      
      if (temp.data == val) {
        
        if(temp.next==null){
            temp.prev.next = null
            
        }else{
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev
        }
          
        temp = temp.next;
      } else {
        temp = temp.next;
      }
    }
  }

reverse(){
    if(!this.head){
        console.log("empty");
        return
    }
console.log("hai");
  let  temp=this.tail
    let listValue=""
    while(temp){
listValue+=" "+temp.data
temp=temp.prev
    }
    console.log(listValue);
return;
}

  display() {
    if (!this.head) {
      console.log("empty");
      return;
    } else {
      let listValues = "";
      let curr = this.head;
      while (curr) {
        listValues += " " + curr.data;
        curr = curr.next;
      }
      console.log(listValues);
      return;
    }
  }
}

const list = new DoublyLinkedList();


list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);
list.addLast(60);

list.display();

list.reverse()


