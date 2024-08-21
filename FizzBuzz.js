// Write a program that prints numbers from 1 to 100. For multiples of 3, 
// print "Fizz" instead of the number. For multiples of 5, print "Buzz" 
// instead of the number. For numbers that are multiples of both 3 and 5, 
// print "FizzBuzz".

const arr= [10,1,5,9,6,4,1]

for( let i=0; i<arr.length; i++){

    if (i%5==0 && i%3==0){
        console.log("FizzBuzz")
    }else if (i%5==0){
        console.log("Buzz")
    }else if(i%3==0){
        console.log("Fizz")
             
    }
}


