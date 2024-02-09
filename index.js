//** CODECADEMY INTRO TO JAVASCRIPT VIDEO START **/
// DECLARE VARIABLES //

/* Data Types:
undefined: something that hasnt been defined
null: means nothing
boolean: true or false
string: any sort of text
symbol: an immutable primative value that is unique
number: a number
object: can store key value pairs
*/

var newVariable = "using var to set new variable";

newVariable = "updating variable"; // with var you can update a variable at any point during your program

console.log(newVariable); // allows you to see things in the console

let ourName = "wyatt"; // will only be used in the scope of where you stored that

const pi = 3.14; // a variable that can never change



// STORING VALUES WITH THE ASSIGNMENT OPERATOR //

var a; // just declaring a variable
var b = 2; // declaring and assigning a variable
console.log(a); //prints null
a = 7; // assigning a
b = a; // assigned the contents of a to b
console.log(a); // prints 7



// INITIALIZING VARIABLES WTH THE ASSIGNMENT OPERATOR //

var a = 9;



// UNINTIALIZED VARIABLES // 

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";



// BASIC MATH //

var sum = 10 + 10;
console.log(sum); /*prints 20*/

var difference = 45 - 33; /*prints 12*/

var product = 8 * 10; /*prints 80*/  

var quotient = 77 / 44; /*this divides, not doing the math*/



// INCREMENT AND DECREMENT // to add or subtract by 1

var myVar = 87;

myVar = myVar + 1; // myVar++ easier way to increment

myVar = myVar - 1; // decrement myVar--



// DECIMAL NUMBERS // -- anything that has a decimal point is a decimal point number

var ourDecimal = 5.7;

var myDecimal = 0.009;

// MULTIPLY TWO DECIMALS // -- use the * sign

var product = 2.0 * 2.5;
console.log(product); /*prints 5*/



// DIVIDE DECIMALS // -- use the / symbol

var aDecimal = 5 / 5;
console.log(aDecimal); /*prints 1*/



// FINDING A REMAINDER // -- use the % to find the remainder (often used to determine if a number is even or odd)

var remainder;
remainder = 11 % 3; 
console.log(remainder); /*prints 2*/



// AUGMENTED MATH OPERATIONS //

var a = 3;
var b = 17;
var c = 12;
var d = 23;

a = a + 12; // a += 12;
b = 9 - b; // b -= 9;
c = c * 7; // c *= 7;
d = d / 5; // c /= 5;



// DECLARE STRING VARIABLES // -- anything surrounded by either double or single quotation marks  or backticks is a string

var firstName = "Alan";
var lastName = "Turing";

// ESCAPING LITERAL QUOTES // -- use a backslash let javascript know what the last quote of the string is and what quotes to ignore

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";



// QUOTING STRINGS WITH SINGLE QUOTES //

var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; // use single quotes on the outside instead to achieve the same result :)
var myStr = `<a href="http://www.example.com" target="_blank">Link</a>`; // you can also use backticks 



// ESCAPE SEQUENCES //

/****
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr); /* Prints out:
FirstLine
    \SecondLine
ThirdLine
*/



// PLUS OPERATOR //

var ourStr = "I come first. " + "I come second.";

var myStr = "this is a string. " + "I like it.";



// PLUS EQUALS OPERATOR //

var ourStr = "I come first. ";
ourStr += "I come second.";
// prints I come first. I come second.

var myStr = "this is a string. ";
myStr += "and this is too."; 
// prints this is a string. and this is too.



// CONSTRUCTING STRINGS WITH VARIABLES //

var yourName = "freeCodeCamp";
var ourCode = "hello, this is some " + yourName + "coursework";



// APPENDING VARIABLES TO STRINGS //

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "cool!";
var myStr = "learning is ";
myStr += someAdjective;

// LENGTH OF A STRING //

var firstNameLength = 0;
var firstName = "Wyatt";

firstNameLength = firstName.length;
console.log(firstNameLength);

var lastNameLength = 0;
var lastName = "Murdoch";

lastNameLength = lastName.length;
console.log(lastNameLength);



// BRACKET NOTATION // -- when selecting something in a string the first letter or number will start counting at zero

var firstLetterOfFirstName = "";
var firstName = "Wyatt";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

var firstLetterOfLastName = "";
var lastName = "Murdoch";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);



// UNDERSTAND STRING IMMUTABILITY //

var myStr = "Jello World!";

myStr[0] = "H"; // this selects the first (0) letter in the string and appends it



// FIND THE NTH CHARACTER //

var firstName = "Wyatt";
var secondLetterofFirstName = firstName[1]; // selects the second character in the string 
var lastLetterOfFirstName = firstName [4]; // selects the fifth letter in the string

var lastName = "Murdoch";
var firstLetterOfLastName = lastName[lastName.length - 7];
console.log(firstLetterOfLastName);



// WORD BLANKS //

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = ""; // this creates the variable result but we dont define it
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."; // this concantenation is the result of adding the result variable with the variables we called in our function
    return result; // this is returning the result
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));



// ARRAYS //

var testArray = ["small", 23];



// NEST ARRAYS //

var myArray = [["Grant", 26], ["Peyton", 24], ["Trey", 29], 65, ["this", "is", "an", "array"]];



// ACCESS ARRAY DATA //

var myData = myArray[0][0]; // to access data in a multi-dimensional list you need to use brackets for each position in the array
console.log(myData);

// MODIFY ARRAY DATA //

myArray[0][0] = "stupid"; // the 0,0 selects grant in the array and changes the string to "stupid"
console.log(myArray);

myArray[0][0] = "Grant"; // the 0,0 selects stupid in the array and changes the string to Grant
console.log(myArray);



// ACCESS MULTI-DIMENSIONAL ARRAYS //

var theArray = [["Grant", 26], ["Peyton", 24], ["Trey", 29], 65, ["this", "is", "an", "array"]];

/* the following is the order in the list
grant = 0,0
26 = 0,1
peyton = 1,0
24 = 1,1
trey = 2,0
29 = 2,1
65 = 3
this = 4,0
is = 4,1
an = 4,2
array = 4,3
*/



// PUSH() // -- pushes to the end of the array

var newArray = ["Stimpson", "J", "Cat"];
newArray.push("Happy", "joy");

console.log(newArray);



// POP() // -- removes the last object in the array

var anArray = [1,2,3,4,5,6,7];
var removedFromAnArray = anArray.pop(); // creating a variable to store the removed object from the array
console.log(anArray); /* prints 1,2,3,4,5,6 */
console.log(removedFromAnArray); /* prints 7 */



// SHIFT() // -- removes the first element of the array

var newArray = ["Stimpson", "J", "Cat"];
var removedFromNewArray = newArray.shift(); // declaring variable and setting it equal to newArray.shift() this is removing the first element
console.log(newArray); // prints 'J', 'Cat'
console.log(removedFromNewArray); // prints Stimpson



// UNSHIFT() // -- adds an element to the beginning of the array

var hoorayArray = ["I'm ", "tired", " of ", "coding."];
hoorayArray.shift(); // prints tired of coding.
hoorayArray.unshift("You're"); // prints You're tired of coding.



// WRITE REUSABLE WITH FUNCTIONS // -- allow us to create reusable code in javascript

function ourReusableFunction() { // creating a function called ourReusableFuction
    console.log("Hola, World!"); // telling the function to print Hola World to the console every time it is called within the program
}

ourReusableFunction(); // calling the function out, it will now print in the console



// ARGUMENTS //

function ourFunctionWithArgs(a, b) { // creating a function called ourFunctionWithArgs and assigning two placeholders to it a and b
    console.log(a - b); // telling the function to print a - b to the console
}
ourFunctionWithArgs(10, 5); // calling out the function and printing 5 to the console



// GLOBAL SCOPE // -- can be seen throughout the whole program. variables that can be seen outside of your function block

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();



// LOCAL SCOPE // -- can be called out and seen within the function block

function myLocalScope() {
    myVar = 5; // since it was created in a function, it is only accessable inside of that function
    console.log(myVar);
}
myLocalScope();

console.log(myVar); // will print out undefined because myVar is only accessable within the scope of the function it was created in



// GLOBAL VS LOCAL SCOPE IN FUNCTIONS // -- there can be local variables with the same name as global variables however the local variable will take priority over the global variable

var outerWear = "T-Shirt"; // global variable

function myOutfit() {
    var outerWear = "Coat"; // local variable

    return outerWear;
}

console.log(myOutfit()); // prints out "Coat"
console.log(outerWear); // prints out "T-Shirt"



// RETURN A VALUE FROM A FUNCTION //

function minusSeven(num) { //here num is just a placeholder for whatever you will be passing through the function
    return num - 7; // whatever num you pass through minus seven
}

console.log(minusSeven(10)); // this is passing the number 10 into the function



// UNDEFINED VALUE RETURNED //

var sum = 0;
function addThree() {
    sum = sum + 3; // there is no return value for the function so the return would be undefined
}

function addFive() {
    sum += 5;
}

// ASSGNMENT WITH A RETURNED VALUE //

var changed = 0; // declaring the variable "changed"

function change(num) { // creating a function and adding num as a placeholder
    return (num + 5) / 3; // telling the program to return num + 5 / 3 when the function is called out
}

changed = change(10); // pushing the number 10 through the function change and updating the varibale changed and assigning the return of function change to it
console.log(changed); // prints out 5

var processed = 0; // declaring the variable "processed"

function processArg(num) { // creating function named "processArg" and using num as a placeholder
    return (num + 3) / 5; // telling program to return the value of num + 3 / 5 when the function is called out
}

processed = processArg(10); // updating the variable processed to equal the value of function "processedArg" with the number 10 being pushed through the function
console.log(processed); // prints 2.6



// STAND IN LINE //

function nextInLine(arr, item) {


    return item;
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); // printing out the array before its been run through the function // JSON.stringify changes an array into a string that can easily be printed out onto the screen
console.log(nextInLine(testArr, 6)); // passing the array through the function
console.log("After: " + JSON.stringify(testArr)); // printing the results of passing the array through the function



// BOOLEAN VALUES //



// IF STATEMENTS //



// EQUALITY OPERATORS //



// AND / OR OPERATORS //



// ELSE STATEMENTS //



// ELSE IF STATEMENTS //



// LOGICAL ORDER IN IF ELSE STATEMENTS //



// CHAINING IF ELSE STATEMENTS //



// GOLF CODE //



// SWITCH STATEMENTS //



// RETURNING BOOLEAN VALUES FROM FUNCTIONS //



// RETURN EARLY PATTERN FOR FUNCTIONS //



// COUNTING CARDS //



// BUILD OBJECTS //



// DOT NOTATION //



// BRACKET NOTATION //



// VARIABLES //



// UPDATING OBJECT PROPERTIES //



// ADD NEW PROPERTIES TO AN OBJECT //



// DELETE PROPERTIES FROM AN OBJECT //



// OBJECTS FOR LOOKUPS //



// TESTING OBJECTS FOR PROPERTIES //



// MANIPULATING COMPLEX OBJECTS //



// NESTED OBJECTS //



// NESTED ARRAYS //



// RECORD COLLECTION //



// WHILE LOOPS //



// FOR LOOPS //



// ODD NUMBERS WITH A FOR LOOP //



// COUNT BACKWARDS WITH A FOR LOOP //



// ITERATE THROUGH AN ARRAY WITH A FOR LOOP //



// NESTING FOR LOOPS //



// DO...WHILE LOOPS //



// PROFILE LOOKUP //



// RANDOM FRACTIONS AND WHOLE NUMBERS //



// parseInt FUNCTION //



// TERNARY OPERATOR //



// MULTIPLE TERNARY OPERATORS //



// VAR VS LET //



// CONST KEYWORD //



// MUTATE AN ARRAY DECLARED WITH CONST //



// PREVENT OBJECT MUTATION //



// ARROW FUNCTIONS //



// DEFUALT PARAMETERS //



// REST OPERATOR //



// SPREAD OPERATOR //



// DESTRUCTING ASSIGNMENT //



// TEMPLATE LITERALS //



// SIMPLE FIELDS //



// DECLARATIVE FUNCTIONS //



// CLASS SYNTAX //



// GETTERS AND SETTERS //



// IMPORT AND EXPORT //



//** CODECADEMY INTRO TO JAVASCRIPT VIDEO END **/




//** JAVASCRIPT DOM MANIPULATION VIDEO **/
// SELECTING ELEMENTS IN THE DOM //



// STYLING AN ELEMENT //



// CREATING ELEMENTS //



// ADDING ELEMENTS //



// MODIFY TEXT //



// MODIFYING ELEMENTS ATTRIBUTES AND CLASSES //



// REMOVE AN ELEMENT //



// TRAVERSING THE DOM //



// EVENT LISTENERS //



// EVENT PROPAGATION //



// EVENT DELEGATION //



// PROJECTS //



//** JAVASCRIPT DOM MANIPULATION VIDEO END **//




//** ASYNCHRONUS JAVASCRIPT COURSE VIDEO START **//



// INTRO //



// ASYNCHRONUS JAVASCRIPT //



// SYNC VS ASYNC //



// SETTIMEOUT FUNCTION //



// CALLBACKS //



// PROMISES AND PROMISE CYCLE //



// PROMISE CHAINING //



// ERROR HANDLING //



// FINALLY HANDLER //



// ASYNCH/AWAIT //



// TRY CATCH FINALLY //



// ASYNCH KEYWORD //




//** ASYNCHRONUS JAVASCRIPT COURSE VIDEO END **//