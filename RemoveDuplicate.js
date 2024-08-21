function Remove(arr){
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i]==arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
}

const array = [10,2,3,4,10,20,2,3,5,11,13]

 Remove (array)

console.log(array)