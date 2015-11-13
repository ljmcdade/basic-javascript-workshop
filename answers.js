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

console.log (returnCharAndNumber(" ", 5));

console.log (returnCharAndNumber("Boston", 25));













