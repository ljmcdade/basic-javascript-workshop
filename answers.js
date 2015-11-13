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

console.log(reverseString("yikes"))






















