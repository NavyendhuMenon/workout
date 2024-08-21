// Write a function to calculate the 
// sum of all elements in an array.


function Sum(arr){

    let sum =0

    for ( let i=0; i<arr.length; i++){

        sum= sum+ arr[i]

    }

    return sum

}

const ab= [10,12,32,5,10]

const output = Sum(ab)

console.log(output)


