let a = [1,2,-6, 20, 8,8,2, -2, 4];

function mergeSort(a){
if(a.length<2){
  return a
}
let mid=Math.floor(a.length/2)
let left=a.slice(0,mid)
let right=a.slice(mid)
return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
  let sorted=[]
  while(left.length&&right.length){
    if(left[0]<right[0]){
      sorted.push(left.shift())
    }else{
      sorted.push(right.shift())
    }
  }
  return [...sorted,...left,...right]
}

 console.log(mergeSort(a));