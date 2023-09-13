let a=[-6,20,8,-2,4,6,-4,25]

function quickSort(arr){
     if(arr.length<2){
        return arr
     }
     let pivot =arr[arr.length-1]
     let left =[] 
     let right =[]
     for(i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
     }
     return [...quickSort(left),pivot,...quickSort(right)]
}

let b=quickSort(a)
console.log(b)