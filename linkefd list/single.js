class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    firstAdd(data){
        const node = new Node(data)
       if(!this.head){
this.head=node
this.tail=node

return;
       }
       node.next=this.head
       this.head=node;
       return;
    }

    lastAdd(data){
        const node = new Node(data)

        if(!this.head){

            this.head=node
            this.tail=node
        }else{
        let    temp=this.head
           while(temp)
           if(temp.next==null){
            temp.next=node
            this.tail=node
            return;
           }else{
            temp=temp.next
           }
        }
  }

  addAfter(val,data){
    const node = new Node(data)
    if(!this.head){
    console.log("empty");
    return;
    }
    let temp =this.head
    while(temp){
        if(temp.data==val){
            node.next=temp.next
            temp.next=node
            if(node.next==null){
                this.tail=node
            }
            return;
        }else{
            temp=temp.next
        }
    }
  }
addBefore(val,data){
    const node = new Node(data)
    if(!this.head){
    console.log("empty");
    return;
    }
    let temp=this.head
    let prev=temp
    if(this.head.data==val){
        node.next=this.head
        this.head=node
        return;
    }
    while(temp){
        if(temp.data==val){

            node.next=temp
            prev.next=node
            return
        }else{
            prev=temp
            temp=temp.next
        }
    }

}
deleteByValue(data){
    if(!this.head){
        console.log("empty");
        return;
    }
    if(this.head.data==data){
       
        this.head=this.head.next
        return;
    }
  let  temp=this.head
  let  prev=temp
  while(temp){
    if(temp.data==data){
        if(temp.next==null){
            prev.next=null
            this.tail=prev
            return;
        }else{
            prev.next=temp.next
            return;
        }

    }else{
        prev=temp
        temp=temp.next
    }
  }
}
  reverse(){
    if(!this.head){
        console.log("empty");
        return;
    }
    let temp=this.head
    let prev=null
    while(temp){
        let next=temp.next
        temp.next=prev
        prev=temp
        temp=next
        
    }
    this.head=prev
  }

  deleteMiddile(){
    let temp=this.head
    let fast=this.head
    let prev=null
    while(fast.next!==null){
        fast=fast.next.next
        prev=temp
        temp=temp.next
    }
    prev.next=temp.next
    return;
  }


    display(){
        if(!this.head){
            return;
        }
        let temp=this.head
        let listvalue=""
        while(temp){
            listvalue+=" "+temp.data
            temp=temp.next
        }
        console.log(listvalue);
    }
}

const list=new LinkedList()
list.firstAdd(10)
list.lastAdd(20)
list.addAfter(20,30)
list.lastAdd(40)
list.addAfter(40,50)
list.display()

list.deleteMiddile()

list.display()

