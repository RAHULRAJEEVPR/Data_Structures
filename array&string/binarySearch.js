let a=[1,2,3,4,5,6,7,8,9,10]

let left=0
let right=a.length-1
let target=3

    while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(a[mid]==target){
        console.log(mid);
        break;
    }
    if(target<a[mid]){
        right=mid-1
    }else{
        left=mid+1
    }
}

let b=a.slice(1)
console.log(b);



//..................to find number of elements  before target

let arr=[1,2,3,3,5,5]


let targett=3
function search(a,target){

  let left=0
  let right=a.length-1
  
  while(left<=right){
    if(target>a[a.length-1]){
      console.log(a.length);
      return;
    }
    let mid =Math.floor((left+right)/2)
    if(a[mid]==target){
      
      while(a[mid+1]==target){
       mid= mid+1
      }
      console.log(mid+1);
      break;
    }
    if(target<a[mid]){
      right=mid-1
    }else{
      left=mid+1
    }
  }
  let i=0
  while(a[i]<=target){
    i++
  }
  return i
}

let d=search(arr,targett)
console.log(d);