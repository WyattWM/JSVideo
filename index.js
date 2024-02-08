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

var newVariable = "using var to set new variable"; // var can be used throughout your whole program

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



// WORD BLANKS //



// ARRAYS //



// NEST ARRAYS //



// ACCESS ARRAY DATA //



// MODIFY ARRAY DATA //



// ACCESS MULTI-DIMENSIONAL ARRAYS //



// PUSH() //



// POP() //



// SHIFT() //



// UNSHIFT() //



// SHOPPING LIST //



// WRITE REUSABLE WITH FUNCTIONS //



// ARGUMENTS //



// GLOBAL SCOPE //



// LOCAL SCOPE //



// GLOBAL VS LOCAL SCOPE IN FUNCTIONS //



// RETURN A VALUE FROM A FUNCTION //



// UNDEFINED VALUE RETURNED //



// ASSGNMENT WITH A RETURNED VALUE //



// STAND IN LINE //



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