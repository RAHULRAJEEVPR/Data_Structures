let arr=[-6,20,8,-2,4]
  

function insertionSort(a){
    for(i=1;i<a.length;i++){
        let numberToInsert = a[i]
        let j= i-1

        while(j>=0 && a[j]>numberToInsert){
            a[j+1]=a[j]
                j=j-1
            
        }
        a[j+1]=numberToInsert

    }
}

console.log(arr);
insertionSort(arr)

console.log(arr);