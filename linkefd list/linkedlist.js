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
  }

  addFirst(data) {
    const node = new Node(data); 
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  addEnd(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp)
        if (temp.next == null) {
          temp.next = node;
          this.tail = node;
          return;
        } else {
          temp = temp.next;
        }
    }
  }

  addAfterPos(pos, data) {
    const node = new Node(data);
    if (this.head.data == pos) {
      node.next = this.head.next;
      this.head.next = node;
    }
    let temp = this.head;
    while (temp) {
      if (temp.data == pos) {
        node.next == temp.next;
        temp.next = node;
        if (node.next == null) {
          this.tail = node;
        }
        return;
      } else {
        temp = temp.next;
      }
    }
  }

  addBeforePos(pos,data){
const node=new Node(data)
if(this.head.data==pos){
    node.next=this.head
    this.head=node
}else{
   let temp=this.head
   let prev=null
    while(temp){
        if(temp.data==pos){
        node.next=prev.next
        prev.next=node
        return
    }else{
        prev=temp
        temp=temp.next
    }
    }
}
  }

  set(pos,data){
    const node=new Node(data)
    if(this.head.data==pos){
    node.next=this.head.next
    this.head=node
    }else{
     let   temp=this.head
     let   prev=null
        while(temp){
            if(temp.data==pos){
                node.next=temp.next
                prev.next=node
                if(node.next==null){
                    this.tail=node
                }
                return;
            }else{
                prev=temp
                temp=temp.next
            }
        }
    }

  }

addAtIndex(index,data){
    const node=new Node(data)
    if(index==0){
        node.next=this.head
        this.head=node
    }else{
        let i=0
        let temp=this.head
        let prev=null
        while(temp){
            if(i==index){
                node.next=prev.next
                prev.next=node 
                return;
            }else{
                prev=temp
                temp=temp.next
                i++
            }
            }
       
    }
}


  deleteFirst(){
    if(!this.head){
        return;
    }else{
        this.head=this.head.next
        return;
    }
  }

  deleteLast(){
    if(!this.head){
        return;
    }else{
        let temp=this.head
        prev=null
        while(temp){
            if(temp.next==null){
                prev.next==null
            }else{
                prev=temp
                temp=temp.next
            }
        }
    }
  }

  deleteByValue(val){
    if(this.head.data==val){
        this.head=this.head.next
        return
    }else{
       let temp=this.head
        let prev=null
           while(temp){
            if(temp.data==val){
                prev.next=temp.next

                return;
            }else{
                prev=temp
                temp=temp.next
            }
           }
    }
  }

  deleteAfter(val){
if(!this.head){
    return
}

let temp=this.head
while(temp)
if(temp.data==val){
    if(temp.next==null){
        return
    }else{
        temp.next=temp.next.next
        return
    }
}else{
    temp=temp.next
}

  }

  deleteBefore(val){
    if(!this.head || this.head.data==val){
        return;
    }
    if(this.head.next.data==val){
        this.head=this.head.next
        return;
    }
    let temp=this.head
    let prev=temp
    while(temp){
        if(temp.next.data==val){
            prev.next=temp.next
            return;
        }else{
            prev=temp
            temp=temp.next
        }
    }
  }

  reverse(){
    let curr=this.head
    let prev=null
    while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
  }
  this.head=prev
 }

linkedListToArray(){
    let arr=[]
    if(!this.head){
        return arr
    }
    let curr=this.head
    while(curr){
        arr.push(curr.data)
        curr=curr.next
    }
    return arr;
}

arrayToLinkedList(arr){
    if(arr.length==0){
        return;
    }
    const node=new Node(arr[0])
    this.head=node
   let temp=this.head
  let i=0
    for(i=1;i<arr.length;i++){
        const node=new Node(arr[i])
       temp.next=node
       temp=node
             }
             this.tail=temp
           
}

removeDup(){
  if(!this.head){
      return
  }
 let temp=this.head
    while(temp){
      let cur=temp.next
      while(cur){
          if(temp.data==cur.data){
              temp.next=cur.next
                  
              cur=cur.next
          }else{
              cur=cur.next
          }
      }
      temp=temp.next

    }
}




  display() {
    if (!this.head) {
      console.log("empty");
    } else {
      let listValue = "";
      let temp = this.head;
      while (temp) {
        listValue += " " + temp.data;
        temp = temp.next;
      }
      console.log(listValue);
    }
  }
}

const list = new LinkedList();

list.addFirst(10);
list.addFirst(30);
list.addFirst(10);
list.addEnd(30);
list.addEnd(40);
list.addEnd(60);
list.removeDup()

 list.display();


// console.log(list);
