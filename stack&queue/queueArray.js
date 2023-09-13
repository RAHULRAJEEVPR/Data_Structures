class Queue{
    constructor(){
        this.items=[]
    }
    
    enqueue(data){
        this.items.push(data)
        this
    }
    dequeue(){
      return  this.items.shift()
    }
    peek(){
        if(this.items.length>1){
            console.log("empty");
        }else{
            return a[0]
        }
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
    }
    
    const newQ=new Queue()
    newQ.enqueue(10)
    newQ.enqueue(20)
    newQ.enqueue(30)
    console.log(newQ.size())
    newQ.print()
    