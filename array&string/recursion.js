function sum(arr){
    if(arr.length==0){
        return 0;
    }else{
        return arr[0]+sum(arr.slice(1));
    }
}

const arr=[1,2,3,4,5,6,7,8]
// let sums=sum(arr)
// console.log(sums);

let left=0
let rigth=arr.length-1
let target=6

//bainary search recursion
function binary(a,target,left,right){
    let mid=Math.floor((left+rigth)/2)
    if(left>rigth){
        return null
    }
    if(a[mid]==target){
        return mid
    }
   if(target<a[mid]){
    right=mid-1
 return   binary(a,target,left,right)
   }else{
    left=mid+1
  return  binary(a,target,left,right)
   }
   
}

let b=binary(arr,target,left,rigth)
console.log(b);

console.log(arr);