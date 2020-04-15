// IF Statement
// if else
// else if
// Advanced Control Flows below
// 1) ternary operator
// 2)  Switch

var name = "Billy";
if (name === "Billy") {
    alert ("Hi Billy");
}

// IF ELSE Statement
var name = "Billy";
if (name === "Billy") {
    alert ("Hi Billy");
} else {
    alert('Hey, I dont know you');
}

// ELSE IF Statement
var name = "Billy";
if (name === "Billy") {
    alert ("Hi Billy");
} else if ( name === "Suzzy") {
    alert ("Welcome Suzzy");
} else {
    alert("Hey, I dont know you");
}

// LOGICAL OPERATORS
if (name === "Billy" || name === "Ann") {
    alert("Hi Ann or Billy");
}

// Using AND Operator
var firstName = "Bob";
var lastName = "Smith";

if (firstName === "Bob" && lastName === "Smith") {
    alert("Hi Bob Smith");
}

var name = "Bob";
if (!(name === "Bob")) {
    alert("Hi bob");
    } // It alerts: Hi bob

//Ternary Operator
function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "User is valid" : "Access denied";

// Example two

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "0102354789" : "not Valid");

// The fn below serves same purpose as (var answer .....) but the ternary condition is simpler and cleaner to use and one line

function condition() {
    if(isUserValid(true)) {
        return " User is Valid";
    } else {
        return " Access denied"
    }
}
var condition2 = condition();


// It reads: if expression is true, run first result. if expression is false, run second result
// var = expression ? "...." : ".....";
//answer; gives "User is valid" because isUserValid is true
//automatedAnswer: gives...Your account # is not valid......because the functions runs as false

// SWITCH Statement....It is used when you have many options to pick one from. You dont have to use if else..

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You are in Nigeria";
            break;
        case "left":
            whatHappens = "You are in Ghana";
            break;
        case "right":
            whatHappens = "You are in Swisss";
            break;
        case "back":
            whatHappens = "You are in Canada";
            break;
        default:
            whatHappens = "You picked a wrong value"
    }
    return whatHappens;
}
moveCommand("forward");

// the fn takes a parameter(direction).
// the switch  receives the parameter, direction and checks if direction is forward.
// in case it is forward, whatHappen....break out and return value of whatHappens
// in case switch is left...