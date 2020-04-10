//Functions are pieces of codes that perform some functions eg alert, prompt etc or create your own functions
// Lets see the diff ways of creating functions. 
// ARGUMENTS: like 4, 5 etc. Fns can have argumenst eg multiply(4,5) when calling a fn
//PARAMETER: like a, b e.g function multiply(a,b)..
// METHOD is sth like inside an object and have a dot notation in front

// 1) FUNCTION DECLARATION

function sayHello() {
    console.log("Hello Ray");
}
sayHello();

// 2) FUNCTION EXPRESSION....The fn has no name but assignes to a var
// Fn expression ends with a semi colon. Expression produce value eg
// 1 +3;
//var a = 3;
// return true;

var sayBye = function() {
    console.log("Say Bye to Ray");
}
sayBye();

// Using ARGUMENTS to practice DRY..DONT REPEAT YOURSELF
function song() {
    console.log("This is song one");
    console.log("This is song two");
}
song();
// Assuming we have 1000s of songs, we dont have to keep editing the fn or writing a new fn. Use arguments as below

function vocals(sing) {
    console.log(sing);
}
vocals("la di da aaaa");
vocals("obodo wan mor ooooo");
vocals("ojuelegba oo dem go know my story");

//Using RETURN
//When your fn does not return sth, we get "Undefined". When you return sth, you get a "Value" eg

function multiply(a, b) {
    a * b;
}
multiply(5, 10) // output is: Undefined
// To get it to give a value, introduce return

return a *b; //this will give a value

//In a fn, have one RETURN stmt. Any return stmt after the first return wont run as the first return will run and exit the function
function multiply(a, b) {
    return a; // only this return will run ie 5 and exit
    return a * b;
    return b;
}
multiply(5, 10)

function multiply(a, b) {
    if (a > 10 || b > 10) {
        console.log("This is quite hard"); // you can use return too beside console.log here 
    } else {
        return a *b;
    }
}
multiply(5,40);

// Fns are vars too ie you can assign fns to vars
var abc = function(a, b) {
    return a * b;
}
alert(abc(5,3));


// Example of a METHOD
var obj = {
    thisIsAMethod: function() {

    }
}
// we access the method as below
obj.thisIsAMethod();