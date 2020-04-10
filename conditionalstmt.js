// IF Statement

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