const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);

let arr=[1,2,3,4,5]
// array sum recursion
function sum(arr){
    if(arr.length==0){
        return null
    }else{
        return arr[0]+sum(arr.slice(1))
    }
}
let r=sum(arr)
console.log(r);
