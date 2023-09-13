let a=[-6,20,8,-2,4]

function bubbleSort(arr){
    let swapped
        do {
            swapped=false
        for(i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp =arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            } 
        }  
    }while(swapped)
    
}
bubbleSort(a)

console.log(a); 

