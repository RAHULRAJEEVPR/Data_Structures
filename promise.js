const promiseOne=new Promise((resolve,reject)=>{
    //do an async task
     setTimeout(()=>{
        console.log("task complete");
        
     },1000)
})

const promiseTwo =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("something")
    },1000)
})
promiseTwo.then((data)=>{
    console.log(data);
    
})

const promiseThree =new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error=true
       if(!error){
        resolve("no issues")
       }else{
        reject("error")
       }

    },1000)
})
promiseThree.catch((err)=>{
    console.log(err);
    
})