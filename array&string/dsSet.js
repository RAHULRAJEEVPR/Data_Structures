let a=[6,5,4,3,9,8,0]
let t=10

function result(a,t){
    const mySet = new Set();
    for(i=0;i<a.length;i++){
      let num=a[i]
      let match=t-num; 
      if(mySet.has(match)){
        return [num,match]
      }else{
    mySet.add(num)
      }
    }
}

let v=result(a,t)
console.log(v);