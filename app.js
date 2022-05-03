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


let userInput = prompt("Enter a letter to see if it is a vowel.").toUpperCase();


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

