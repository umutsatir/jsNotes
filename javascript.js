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



// * ARRAY FOREACH FUNCTION //
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let textlist = "<ul>";
fruits.forEach(myFunction); // it calls the function for each element of the array
textlist += "</ul>";

function myFunction(value) {
    textlist += "<li>" + value + "</li>";
}

fruits.push("Lemon"); // it adds a new element to the end of the array
let fruitlength = fruits.push("Lemon"); // it returns the new length of the array
fruits.pop(); // it removes the last element of the array
let poppedfruit = fruits.pop(); // it returns the removed element

Array.isArray(fruits); // it returns true if the variable is an array
fruits instanceof Array; // it returns true if the variable is an array
fruits.toString(); // it returns the array as a string seperated by commas
fruits.join(" * "); // it returns the array as a string seperated by the given string
fruits.shift(); // it removes the first element of the array and shifts all other elements to a lower index
fruits.unshift("Lemon"); // it adds a new element to the beginning of the array and shifts all other elements to a higher index

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myBros = ["Robin", "Morgan"];
const myChildren = myGirls.concat(myBoys, myBros); // it returns a new array by merging three arrays

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi"); // it adds new elements to an array and removes old elements
// first parameter is the index where new elements should be added (spliced in)
// second parameter is the number of elements to be removed
// rest of the parameters are the new elements to be added

const citrus = fruits2.slice(1); // it returns a new array with the elements from the given index to the end

let div = element.querySelectorAll("div"); // it returns all divs in a nodelist
// ! NODELIST IS NOT AN ARRAY! But if you want to convert it to an array, use Array.from()

div.setAttribute('id', 'theDiv');                              
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute

div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// removes "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if it does, then remove it

div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div

div.innerHTML = '<span>Hello World!</span>';                   
// renders the HTML inside div

div.appendChild(content); // it creates a child

<script src="js-file.js" defer></script> // if you have DOM commands like above, you should use defer command
// it loads the JS file AFTER the HTML code. Or you can write this script under.

