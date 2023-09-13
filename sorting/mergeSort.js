function mergeSort(a){
    if(a.length<2){
        return a
    }
    const mid =Math.floor(a.length/2)
    const leftArr=a.slice(0,mid)
    const rightArr=a.slice(mid)
 return merge( mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr=[]
    while(leftArr.length&&rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
  return  [...sortedArr,...leftArr,...rightArr]

}


let a = [-6, 20, 8, -2, 4];
let b=mergeSort(a)
console.log(b);