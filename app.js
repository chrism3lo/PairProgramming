// Easy 1
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



// Easy 2
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



//Medium 1
//Create a Function Called “vowelChecker” that takes in 
//a single argument (x) and logs weather or not the input is a vowel

// let userInput = prompt("Enter a letter to see if it is a vowel.").toUpperCase();


// function isVowel(x) {
//     var result;
//     result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
//     if (result === true){
//         console.log("this is a vow")
//     } else{
//         console.log("this is not a vowel.")
//     }
//     return result;
// }
// isVowel(userInput)


//Medium 2

function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("It is an anagam");
    } else { 
       console.log("It is not an anagram");
    }
 }
 checkStringsAnagram("code 10 cohort","cohort code 10")

 //Medium 3
// let hcf;
// function gcd(num1,num2){
//     for (let i = 1; i <= num1 && i <= num2; i++){
//         if (num1 % i === 0 && num2 % i === 0){
//              return hcf = i;
//         }
//     }
// }
// console.log(gcd(60,72));

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  console.log(gcd_two_numbers(72,60));

  // Hard 1

  