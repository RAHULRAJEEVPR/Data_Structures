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

    addLast(data){
let node=new Node(data)
if(!this.head){
    this.head=node
    return
}
let temp=this.head
while(temp){
    if(temp.next==null){

        temp.next=node
        this.tail=node
        return;
    }else{
        temp=temp.next
    }
}
    }

display(){
    if(!this.head){
       console.log("empty");
        return
    }
    let temp=this.head
    let listValue=""
    while(temp){
        listValue+=temp.data
        temp=temp.next
    }
    console.log(listValue);

}

}
const list= new LinkedList()

list.addLast(10)
list.addLast(20)
list.addLast(30)
console.log(list);
list.display()
