class Node{
  constructor(value){
    this.value=value
    this.next=null
  }
}

class Stack{
  constructor(){
    this.top=null
  }

  push(value){
    const node=new Node(value)
    node.next=this.top
    this.top=node
  }
  display(){
    if(!this.top){
      return console.log("empty");
    }
    let list=""
    let temp=this.top
    while(temp){
      list+=" "+temp.value
      temp=temp.next
    }
    console.log(list);
  }
}

const stack= new Stack()
stack.push(10)
stack.display()