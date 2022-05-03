//Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
//numbers.
 
let randArray = [3, 4, 5, 6, 7, 8];

function even (a){
    let ar = [];
    for (let i =0; i < randArray.length; i++){
        if(i % 2 === 1){
            ar.push(a[i])
        }
        // ar.push(a[2 * i + 1])
    }
    return ar;
}
function odd (a){
    let ar = [];
    for (let i =0; i < randArray.length; i++){
        if(i % 2 === 0){
            ar.push(a[i])
        }
        // ar.push(a[2 * i + 1])
    }
    return ar;
}
console.log(even(randArray));
console.log(odd(randArray));




// Create a function that checks an array for prime numbers then inserts any pimes into a new array.

let allNums= [2,7,8,78,73,53,69,35]

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return num > 1;
}
console.log(allNums.filter(isPrime))
