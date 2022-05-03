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
console.log(allNums.filter(isPrime));



//Medium 1
//Create a Function Called “vowelChecker” that takes in 
//a single argument (x) and logs weather or not the input is a vowel

let userInput = "a".toUpperCase()


function isVowel(x) {
    var result;
    result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U";
    if (result === true){
        console.log("this is a vow")
    } else{
        console.log("this is not a vowel.")
    }
    return result;
}
isVowel(userInput)


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

  // Medium 4

//   Create a car object with the items: Make, Model, Year, Milage, and Color. 
// Then create 3 methods in the object;A driveToWork method, driveAroundTheWorld method, and runErrands method. 
// Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.

  class Car{
    constructor(make, model,year,milage,color){
    this.make=make
    this.model=model
    this.year= year
    this.milage= milage
    this.color=color
  }
  driveToWork(x){
    console.log(`My Current Millage is: ${this.milage}`)
   this.milage= x + this.milage
   console.log(`My New Millage is: ${this.milage}`)
  }
  driveAroundTheWorld(w){
    console.log(`My Current Millage is: ${this.milage}`)
   this.milage= w + this.milage
   console.log(`My New Millage is: ${this.milage}`)
  }
  runErrands(e){
    console.log(`My Current Millage is: ${this.milage}`)
    this.milage= e + this.milage
    console.log(`My New Millage is: ${this.milage}`)
  }


  }

  let jim= new Car('honda','civic','2002',500000,'red')
  jim.driveToWork(50)
  jim.driveAroundTheWorld(20000)
  jim.runErrands(15)


// Hard 1

let isParenthesisMatching = str => {
  let stack = [];
  let open = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let closed = {
    '}': true,
    ']': true,
    ')': true
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
};
console.log(isParenthesisMatching('(Hello)'));
