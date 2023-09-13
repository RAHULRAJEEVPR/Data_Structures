class Stack{
    constructor (){
        this.items=[]
    }
    push(data){
this.items.push(data)

    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }

    // deleteMiddile(){
    //     let mid=Math.floor(this.items.length/2)
    //     while(mid<this.items.length-1){
    //         this.items[mid]=this.items[mid+1]
    //         mid=mid+1
    //     }
    //    this.items.pop()
    // }

   
    deleteMiddile(){
        let mid=Math.round(this.items.length/2)
        for(let i=0;i<mid;i++){
            newstack.items.push(this.items.pop())
        }
        newstack.items.pop()
        while(newstack.items.length!==0){
            this.items.push(newstack.items.pop())
        }
return this.items
    }
}


const stack =new Stack()
const newstack =new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.deleteMiddile()
console.log(stack.peek())
console.log(stack.size())
stack.print()