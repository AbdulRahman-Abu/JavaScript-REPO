var button = document.querySelector("button");                            // this grabs the button element
var button2 = document.getElementsByTagName("button")                     // grabs the array and not button
var button3 = document.getElementsByTagName("button")[0];                 // this grabs the button element

//Lets add elements to the list when users input element and click enter
var input =document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");                                // create li to hold new elements
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }}

button.addEventListener("click", addListAfterClick);
    
input.addEventListener("keypress", addListAfterKeyPress);



 










/* 
developer.mozilla.org/en-US/docs/Web/Events
browse character codes: cambiaresearch.com
// We can use JS to listen to events eg click, mouseover, mouseenter, mouseleave
// read more: eevents at developer.mozilla.org

Lets listen to click event. 

addEventListener takes two arguments, an event and a fn that describes what to happens to events
button.addEventListener("click", function() {
    console.log('CLICKSSSSSSS');
}
)
CLICKSSS will be displayed at console when: Click Me is clicked

ERROR MESSAGE
Uncaught TypeError: button.addEventListener is not a function.
The error is because you are trying to use the method(addEventListener) on an access instead of the actual element

button.addEventListener("click", function() {
    if(input.value.length > 0) { // to make sure empty entry of no text does not work
        console.log(input.value);
        var li = document.createElement("li");                                // create li to hold new elements
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""; // clear the input after clicking enter

    }
})

input.addEventListener("keypress", function(event) {
    // console.log(event); // used to get the keycode of an event. Here keycode of enter is 13
    if(input.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");                                // create li to hold new elements
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})
// REFRACTOR The codes above have been refactored to practice DRY..Dont Repeat Yourself


Example two

var h1 = document.createElement("h1");
 var text = document.createTextNode("This is our created heading");
 h1.appendChild(text);
 document.body.appendChild(h1);

*/