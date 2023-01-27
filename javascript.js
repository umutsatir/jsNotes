let x = 10;
let y = "10";
// ? we can use var instead of let, but let is better
// ? if we create a variable in if statement, we can't use it outside of the if statement if we use let. However, we can use it if we use var
// ? and we can use const instead of let, but we can't change the value of const (const means constant)
document.getElementById("equal").innerHTML = (x == y); // true because == is loose equality operator, it only checks the value
document.getElementById("equal2").innerHTML = (x === y); // false because === is strict equality operator, it checks the value and type
console.log(+y); // that equals to Number(y) but this is shorter, it converts the variable to number

let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools"); // i means case insensitive

let text2 = "Please visit Microsoft and Microsoft!";
let newText2 = text2.replace(/Microsoft/g, "W3Schools"); // g means global, it replaces all matches

text = text.replaceAll("Microsoft","W3Schools"); // it replaces all matches

let text3 = "Apple, Banana, Kiwi";
let part = text3.slice(7, 13); // it returns the data between the two indexes

let text4 = "Apple, Banana, Kiwi";
let part2 = text4.substring(7, 13); // it returns the data between the two indexes but it can't accept negative indexes

let text5 = "      Hello World!      ";
let text6 = text5.trim(); // it removes the spaces from the beginning and the end
// we can use trimStart() and trimEnd() instead of trim()

let text7 = "5";
let padded = text7.padStart(4,"x"); // it adds x to the beginning of the text until the length is 4

let text8 = "5";
let padded2 = text8.padEnd(4,"x"); // it adds x to the end of the text until the length is 4
// we cannot do it to the number 5, we can only do it to the string "5" because padStart and padEnd are string methods

let text9 = "HELLO WORLD";
let char = text9[0]; // it returns the first character of the string but this method is read only, we can't change the value of the character

let text10 = "HELLO WORLD";
let Array = text10.split(" "); // it splits the string into an array of words



// * QUESTION MARK OPERATOR TYPES //
let a = 10;
let b = 20;

// ? Ternary Operator
let result = (a > b) ? "x is greater than y" : "x is less than or equal to y"; 
// it returns the first value if the condition is true, otherwise it returns the second value

// ? Optional Chaining Operator
let person = {name:"John", age:50, car: null};
let car = person.car?.model; // it returns undefined if the car is null instead of throwing an error

// ? Nullish Coalescing Operator
let c = null;
let d = 10;
let e = c ?? d; // it returns 10 because c is null



// * ARROW FUNCTIONS //
let sum = (a, b) => a + b; // it returns the sum of a and b