class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    addFirst(data){
        const node=new Node(data)

        if(!this.head){
            this.head=node
            this.tail=node
            return;
        }
        this.head.prev=node
        node.next=this.head
        this.head=node
        return;
    }

    lastAdd(data){
        const node=new Node(data)

        if(!this.head){
          this.head=node
          this.tail=node
            return;
        }
        this.tail.next=node
        node.prev=this.tail

        this.tail=node
        return
    }

    addBefore(pos,data){
        const node=new Node(data)
        if(!this.head){
        console.log("empty");
        return;
        }

        if(this.head.data==pos){
            this.head.prev=node
            node.next=this.head
            this.head=node
            return
        }
        let temp=this.head
        while(temp){
            if(temp.data==pos){
            temp.prev.next=node
            node.next=temp
            temp.prev=node
            node.prev=temp.prev
               
                return;
            }else{
                temp=temp.next
            }
        }
    }
     firstDelete(){
        if(!this.head){
            console.log("empty");
            return;
        }
this.head.next.prev=null
this.head=this.head.next
return
     }

     lastDelete(){
        if(!this.head){
            console.log("empty");
            return;
        }
        this.tail.prev.next=null
        this.tail=this.tail.prev
        return
     }

     deleteByValue(data){
        if(!this.head){
            console.log("empty");
            return;
        }
        if(this.head.data==data){
            this.head.next.prev=null
            this.head=this.head.next
        }

        let temp=this.head
        while(temp){
            if(temp.data==data){
                if(temp.next==null){
                    temp.prev.next=null
                    this.tail=temp.prev
                    return;
                }else{
                    temp.prev.next=temp.next
                    temp.next.prev=temp.prev
                    return;
                }
            }else{
                temp=temp.next
            }

        }
     }


    display(){
        if(!this.head){
            console.log("empty");
            return;
        }
        let temp=this.head
        let listValue=""
        while(temp){
            listValue+=" "+temp.data
            temp=temp.next
        }
        console.log(listValue);
        return
    }
}

const list= new DoublyLinkedList()

list.addFirst(10)

list.lastAdd(20)
list.lastAdd(40)
list.lastAdd(50)
list.addBefore(40,30)
list.deleteByValue(10)

list.display()
