/* this is a one line comment */
/* this function is to return and print the letter of a name: */
function firstLetter(string) { 
    console.log(string.charAt(0));
    
};
firstLetter("Lauren");
 
 /* or I could use: */
 
console.log(firstLetter("Lauren"));

/* testing it out: */

console.log(firstLetter("Peter"));
console.log(firstLetter(" "));

/* Question 2 -- last letter*/

function lastLetter(string) {
    return string.charAt(string.length - 1);
}
console.log(lastLetter("Felicity"));

console.log(lastLetter("Clarissa"));

console.log(lastLetter(" "));

/* question 3 string and number , returns character at position of number */

function returnCharAndNumber(string, number) {
    return string.charAt(number);
}
returnCharAndNumber("Boston", 5);
console.log (returnCharAndNumber("Boston", 5));

console.log (returnCharAndNumber("Studebaker", 3));

/* returns nothing */

console.log (returnCharAndNumber(" ", 5));

console.log (returnCharAndNumber("Boston", 25));

/* question 4 add numbers */

function addNumbers (n1, n2) {
    return n1 + n2;
}
console.log (addNumbers (4, 7))
console.log (addNumbers (44, 746))
console.log (addNumbers ("banana", 7))

/* banana 7, then banana chair */

console.log (addNumbers ("banana", "chair"))

/* question 5 add then multiply */

function addNumbersAndMultiply (n1, n2) {
    return n1 * n2; 
}

console.log (addNumbersAndMultiply(4, 7));
console.log (addNumbersAndMultiply(44, 117));
console.log (addNumbersAndMultiply(444, 7));
console.log (addNumbersAndMultiply("cat", 7));

/* need numbers, words give NaN */


// question 6 if string is add

function addAndSubString(string, n1, n2) {
    if (string === "add") {
        return n1 + n2;
    }
    if (string === "subtract") {
        return n1 - n2;
    }
    if (string === "multiply") {
        return n1 * n2;
    }
    if (string === "div") {
        return n1/n2;
        
    }
    else {
        return 0;
    }
}

console.log(addAndSubString("add", 4, 5));
console.log(addAndSubString("multiply", 8, 9));
console.log(addAndSubString("add", 4, "dog"));
console.log(addAndSubString("pumpkin", 4, "dog"));


//question 7 returns the string as many times as the number

function repeatString (string, number) {
    return string.repeat(number);
}

console.log(repeatString("hello", 3));
// used repeat function



// question 8 reverse the string

function reverseString (string) {
   return string.split('').reverse().join('');
 
}

console.log(reverseString("hello"))

// I split the string so the characters are separated, reversed while separated, then joined them again to give result
//otherwise "," will appear between characters

console.log(reverseString("yikes"))


//question 9  factorials



var factorial = function(n) {
    if(n === 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
 
console.log(factorial(5));

// function within a function. 

function factorialNumber(number) {
    var result = number;
    if (n === 0) {
        return 1;
    }
    else
    for (var i=number; i <= number; ++i){
    return i * (i - 1);
    }
}
console.log(factorialNumber(5))


function factorialNumber(number) {
    var result = 1;
    //looping 1 to 5 and including the result
    for (var i=1; i <= number; i++) {
       result = result * i;
    }
        return result;
    
}
console.log(factorialNumber(5))

//The above solution is the easiest for me to understand because of the looping

//question 10 return longest word in phrase

function longestWordInPhrase (phrase) {
    var result = phrase.split(' ')
    console.log(result);
    var longest = 0;
    var word = '';
    //set empty string outside loop
    
        for (var i=0; i < result.length; i++) {
        if (result[i].length > word.length){
        word = result[i];
        }
    }
        return word;
}

console.log(longestWordInPhrase("I am really really stupendously tired"))

//split the words into an Array, then got length of each word, checked the length against previous result

//question 11 capitalize all words in a phrase

//slice selects elements in an array -- push adds to array

function capEachWord (phrase) {
    var phraseArray = phrase.split(" ");
    var resultArray = [];
   
    for (var i=0; i < phraseArray.length; i++) {
    
        var firstLetter = phraseArray[i].charAt(0).toUpperCase();
        var restOfWord = phraseArray[i].slice(1);
        
        var recomposedWord = firstLetter + restOfWord;
        
        resultArray.push(recomposedWord); 
    }
    
    
    return resultArray.join(" ");
}
console.log(capEachWord("I'm so very very exhausted, seriously"))



//question 12 returns largest number of an array

function largestInArray(array) {

    //var array = [3, 6, 2, 56, 32, 5, 89, 32];
    var largest = 0;
    
    for (var i=0; i < array.length; i++) {
        
        if (array[i] > largest) {
            
            largest = array[i];
        }
    }
    
    return largest;
}
    
console.log(largestInArray([23, 8, 25, 99, 107, 32]));






//question 13 takes an array and returns a filtered array  -- use "filter"

var array = [true, false, true, 0, 1];

function truthyArray(array) {
    var resultArray = [];
    for (var i=0; i < array.length; i++) {
        if (array[i]) {                     //this will automatically be truthy
            resultArray.push(array[i]);  //push adds to array
        }
    }
    return resultArray;
}
console.log(truthyArray([true, false, 0, 1, true]))




//question 14 takes an array and returns sum of all numbers

var list = [3, 7, 44, 92];

function arraySum(array) { //parameter declaration
    var sum =0;
    for (var i=0; i < array.length; ++i) {
        sum += array[i]; //add each element in array to sum
    }
    return sum; //return sum of elements in array
}
console.log(arraySum(list)); //argument declaration


//question 15 takes 2 arrays returns array of unique elements only -- indexOf and slice














