class Node{
    constructor(data){
        
        this.data=data
        this.next=null

    }
}

class Stack{
    constructor(){
        this.top=null
    }

    push(data){
        const node=new Node(data)
        if(!this.top){
            this.top=node
            return
        }else{ 
            node.next=this.top
            this.top=node
        }
        
    }

    pop(){
        if(!this.top){
            console.log("empty");
            return;
        }else{
            this.top=this.top.next
        }
    }

    display(){
        if(!this.top){
           console.log("empty");
            return
        }else{
      let     temp=this.top
      let     list=""
           while(temp){
            list+=" "+temp.data
            temp=temp.next

           }
           console.log(list);
        }

    }
}

const stack =new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.display()
console.log(stack);