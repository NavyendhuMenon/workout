// Write a function to reverse a given string 
// without using built-in functions like reverse(). 

// function reverseStr(str){
    
//     let reversed= ''

//     for (let i=str.length-1; i>=0; i--){

//         reversed +=str[i]
//     }

//      return reversed;
// }



function reverseStr(str){

    let reversed = ''
    for (let i= str.length-1; i>=0; i--){
        reversed = reversed+ str[i]
    }

    return reversed
}

let String = 'Hello'

let output = reverseStr(String)

console.log(output)


