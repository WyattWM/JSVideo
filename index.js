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

function nextInLine(arr, item) { // function nextInLine is created and has two place holders

    arr.push(item); // this is taking an array and "pushing" the new item to the end of the array
    return arr.shift(); // this will return whatever the first element in the array is 
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); // printing out the array before its been run through the function // JSON.stringify changes an array into a string that can easily be printed out onto the screen
console.log(nextInLine(testArr, 6)); // passing the array through the function and passing the number 6 through as well
console.log("After: " + JSON.stringify(testArr)); // printing the results of passing the array through the function



// BOOLEAN VALUES // -- true or false // true is on and false is off // no quotation marks // 

function welcomeToBooleans() {
    return false;
}



// IF STATEMENTS // -- if checks to see if inside a function IF certain conditions are met then the program is to run the code ELSE...

var yourMom = 69;

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { // this is looking to see if any condition is true then it will run what is in the curly braces // always parenthesis after the keyword IF
        return "Yes, it's true"; // then printing the message
    }
    return "No, it's false"; // otherwise its printing this message
}

function numbersAndStuff(num) {
    if (num == 7) { // checking to see if num = 7 
       return "your mom"; // if so then its printing "your mom" 
    }
    return "your mom's mom";
}

console.log(ourTrueOrFalse()); // if put any condition inside the parathesis that is true then you will get a return of "yes, it's true"
var theAnswer = numbersAndStuff(7); // we are passing the number 7 through the function "numbersAndStuff" and the function is saying that yup 7 = 7 so it is printing out "your mom"! // also this is assigning the value of "numbersAndStuff(7)" to the variable "theAnswer"
console.log(theAnswer);



// EQUALITY OPERATORS // -- if you arent declaring something when using the = sign and you are wanting to check and see if its equal to something then you need to use the == operator

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);
console.log(testEqual(10));


// STRICT EQUALITY OPERATOR //

// 3 === 3 would equal true and 3 === '3' would equal false
// the triple equality operator is known as the strict eqaulity operator. strict equality operator does not do the type conversion

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);


function testStrictNotEqual(val) {

    if (val !== 17) { // !== okay so this guy will check if something is not equal to a value AND it will not check different data types.

        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10)); // will print "Not Equal"


// INEQUALITY OPERATOR //

function testNotEqual(val) {
    if (val != 99) { // != is the operator for 'does not equal' this is checking if the val does not equal 99. so anything other than 99 will print out not equal.
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10)); // will print 'Not Equal'



//  LOGICAL AND OPERATOR //

function testGreaterThan(val) {
    if (val >= 100) {
        return "Over 100";
    }

    if (val >= 10) {
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(10)); 



// AND / OR OPERATORS //

function testLogicalAnd(val) {
/*
    if (val <= 50) { // checking to see if its less than or equal to 50
        if (val >= 25) { // checking to see if its more than or equal to 25
            return "Yes"; // if so, return 'Yes'
        }
    }
*/

    if (val <= 50 && val >= 25) { // introducing the && operator // this is checking to see if the val is less than or equal to 50 AND if val is greater than or equal to 25
        return "Yes"; // if so, return 'Yes'
    }


    return "No"; // if not, return 'No'
}

testLogicalAnd(10); // prints 'No'



function testLogicalOr(val) {
/*
    if (val < 10) { // checking to see if val is less than 10 then return 'outside'
        return "Outside";
    }

    if (val > 20) { // checking to see if val is greater than 20 then return 'outside'
        return "Outside";
    }
*/

    if (val < 10 || val > 20 ) { // welcoming to the stage... the OR Operator||| // this is checking to see if val is less than 10 OR val is greater than 20 then print 'outside'
        return "Outside";
    }

    /*if (val > 20) { 
        return "Outside";
    }*/

    return "Inside";
}

testLogicalOr(15);


// ELSE STATEMENTS //

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else { // if the value is less than 5 then result = 'bigger than 5' ELSE result '5 or smaller'
        result = "5 or Smaller";
    }
/*
    if (val <= 5) {
        result = "5 or Smaller";
    }
*/
    return result;
}



// ELSE IF STATEMENTS //

function testElseIf(val) {
    if (val > 10) {
        return "Greater then 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else return "between 5 and 10";
}

testElseIf(7);



// LOGICAL ORDER IN IF ELSE STATEMENTS //
/*
function orderMyLogic(val) { // there is a logical order to if else statements, in this one they are out of order so the function wont print out the less than 5 return
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}
*/

function orderMyLogic(val) { // this would print correctly because it is checking the value in the order it should be checked. PEMDAS vibes
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(7));



// CHAINING IF ELSE STATEMENTS //

function chainedStatements(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge"
    }
}

console.log(chainedStatements(26)); // prints 'huge'



// GOLF CODE //

var names = ["hole-in-one!", "eagle", "birdie", "par", "bogey", "double bogey", "go home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4] 
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
}

golfScore(5, 4);


// SWITCH STATEMENTS //

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default: // defualt is similar to else
            answer = "stuff";
            break;
    }

    return answer;
}

console.log(caseInSwitch(1));

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Medium"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
    }
}

/*
function chainToSwitch(val) { // you can switch a chain of else if statements to a switch statement like below. // this may make it faster to type out and easier to understand.
    var answer = "";
    if (val === "Bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }
    return answer;
}
*/

function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}


// RETURNING BOOLEAN VALUES FROM FUNCTIONS //
/*
function isLess(a,b) { // you can shorten this function by just using the return statement like below
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
*/

function isLess(a, b) {
    return a < b;
}

console.log(isLess(10, 15));



// RETURN EARLY PATTERN FOR FUNCTIONS //

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined; // you can escape a function at any time just by using the return statement
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);


// BUILD OBJECTS // -- similar to arrays use properties instead of indexes

var ourDog = {
    "name": "Camper", // name is a property everything before the colon // the values are everything after the colon 
    "legs": 4, // the values can be any data type in JS
    "trails": 1,
    "friends": ["everything!"]
}

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": ""
};


// ACCESSING OBJECT PROPERTIES WITH DOT NOTATION //

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat; // creating a new var and assigning it the value of the property "hat"
var shirtValue = testObj.shirt; // doing the same but with "shirt"



// ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION // -- if your property has a space in it then you must use bracket notation

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"]; // you use the name of the property inside of the object // this var has been assigned 'hamburger'
var drinkValue = testObj["the drink"];



// VARIABLES //

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16; // playerNumber is set equal to "Montana"
var player = testObj[playerNumber]; // player is set to "Montana as well



// UPDATING OBJECT PROPERTIES //

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    12: 23
};

ourDog.name = "Happy Camper";
ourDog[12] = 43;

console.log(ourDog[12]);


// ADD NEW PROPERTIES TO AN OBJECT //
// DELETE PROPERTIES FROM AN OBJECT //

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    12: true
};

ourDog.bark = "bow-wow"; // you use the same concept of dot notation to add a new property to an object // this will create a new property inside of the ourDog object 
delete ourDog.name; // this deletes something from an object
delete ourDog[12]; // this deletes a number from the object

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.dead = true;
console.log(myDog["dead"]);



// OBJECTS FOR LOOKUPS // - you can use objects to look up values

function phoneticLookup(val) {
    var result = ""

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "easy",
        "foxtrot": "frank"

    };
    result = lookup[val];
    return result;
/*
    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result: "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "frank";
    }*/
}

console.log(phoneticLookup("charlie"));



// TESTING OBJECTS FOR PROPERTIES //

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {

    return "Change Me!";
}

console.log(checkObj("gift"));



// MANIPULATING COMPLEX OBJECTS //

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
];



// NESTED OBJECTS //

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = undefined;

console.log(gloveBoxContents);



// NESTED ARRAYS //

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip", 
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = "";



// WHILE LOOPS //

var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);



// FOR LOOPS //

var ourArray = [];

for (var i = 0; i < 5; i ++) {
    ourArray.push(i);
}

var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);



// ODD NUMBERS WITH A FOR LOOP //

var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for (var i = 1; i < 10;; i += 2) {
    myArray.push(i);
}

console.log(myArray);



// COUNT BACKWARDS WITH A FOR LOOP //

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for ( var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);



// ITERATE THROUGH AN ARRAY WITH A FOR LOOP //

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i ++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);



// NESTING FOR LOOPS //

function multiplyAll(arr) {
    var product = 1;
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);



// DO...WHILE LOOPS //

var myArray = [];
var i = 10;

while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(i, myArray);



// RANDOM FRACTIONS AND WHOLE NUMBERS //

function randomFraction() {

    return Math.random();
}

console.log(randomFraction());



// GENERATE RANDOM WHOLE NUMBERS //

var randomNumberBetween0and19 = Math.floor(Math.Random() * 20);

function randomWholeNum() {

    return Math.random();
}

console.log(randomWholeNum());



// GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE //

function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

function randomRange(myMin, myMax) {

    return 0;

}

var myRandom = randomRange(5, 15);

console.log(myRandom);



// parseInt FUNCTION //

function convertToInteger(str) {

}

convertToInteger("56");


// TERNARY OPERATOR //

function checkEqual(a, b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}

checkEqual(1, 2);



// MULTIPLE TERNARY OPERATORS //

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

checkSign(10);



// VAR VS LET //

var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

}
catTalk();



// COMPARE SCOPES OF THE VAR AND LET KEYWORDS //

function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();


// CONST KEYWORD //

function printManyTimes(str) {
    "use strict";

    var sentence = str + "is cool!";

    sentence = str + " is amazing!"

    for(var i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }

}
printManyTimes("freeCodeCamp");



// MUTATE AN ARRAY DECLARED WITH CONST //

const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}

editInPlace();

console.log(s);



// PREVENT OBJECT MUTATION //

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);



// ARROW FUNCTIONS //

var magic = function() {
    return new Date();
};

// WRITE ARROW FUNCTIONS WITH PARAMETERS //

var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));



// WRITE HIGHER ORDER ARROW FUNCTIONS //

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr;
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



// DEFUALT PARAMETERS //

const increment = (function() {
    return function increment(number, value) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));



// REST OPERATOR //

const sum = (function() {
    return function sum(x, y, z) {
        const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));



// SPREAD OPERATOR //

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = 'potato'
})();
console.log(arr2);



// DESTRUCTING ASSIGNMENT //

var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x : a, y : b, z : c } = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const getTempOfTmrw = undefined;

    return getTempOfTmrw;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

// Destructuring Assignment with Nested Objects //

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const getMaxOfTmrw = undefined;

    return getMaxOfTmrw;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Use Destructuring Assignment to Assign Variables from Arrays //

const [z, x] = [1, 2, 3, 4, 5, 6];
console.log(z, x);

let a = 8, b = 6;
(() => {
    "use strict";

})();

// Use Destructuring Assignment with the Rest Operator //

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const arr = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters //

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    return function half(stats) {
        return (stats.max + stats.min) / 2.0;
    };

})();
console.log(stats);
console.log(half(stats));



// TEMPLATE LITERALS //

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = null;

    return resultDisplayArray;
}

/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 * `<li class="text-warning">var-on-top</li>`,
 * `<li class="text-warning">linebreak</li>`]
 */
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);



// SIMPLE FIELDS //

const createPerson = (name, age, gender) => {

    return {
        name: name,
        age: age,
        gender: gender
    };

};
console.log(createPerson("Zodiac Hasbro", 56, "male"));



// DECLARATIVE FUNCTIONS //

const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);



// CLASS SYNTAX //

var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

// function makeClass() {

//  return Vegetable;
// }
// const Vegetable = makeCLass();
// const carrot - new Vegetable('carrot');
// console.log(carrot.name);



// GETTERS AND SETTERS //

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;



// IMPORT AND EXPORT //



//** CODECADEMY INTRO TO JAVASCRIPT VIDEO END **//


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