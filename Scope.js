var ab = "Can I access this"; // Root Scope(window)

function bb() { // child scope within
    var b = "hello";
    console.log(b);
    console.log(ab);
}
bb();

var fun = 5;

function funFunction() {
    // child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "Byee";
    console.log(2, fun);
}

function funestFunction() {
    // child scope
    var fun = "AHHHHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();

// bb function can access the outside var.
// But the outside vars cannot access what is within a function.
// Elements within a fn are local to that fn and cannot be accessed outside the fn scope
// Global vars can be accessed by functions