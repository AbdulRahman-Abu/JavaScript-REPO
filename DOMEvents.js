// We can use JS to listen to events eg click, mouseover, mouseenter, mouseleave
// read more: eevents at developer.mozilla.org

var button = document.querySelector("button"); // this grabs the button element
var button2 = document.getElementsByTagName("button")// grabs the array and not button
var button3 = document.getElementsByTagName("button")[0]; // this grabs the button element

// Lets listen to click event. 
// addEventListener takes two arguments, an event and a fn that describes what to happens to events
button.addEventListener("click", function() {
    console.log('CLICKSSSSSSS');
}
)
// CLICKSSS will be displayed at console when: Click Me is clicked

// ERROR MESSAGE
//Uncaught TypeError: button.addEventListener is not a function.
// The error is because you are trying to use the method(addEventListener) on an access instead of the actual element

//Lets add elements to the list when users input element and click enter
var Input =document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.getElementsByTagName("ul");

button.addEventListener("click", function() {
    var li = document.createElement("li"); // create li to hold new elements
    li.appendChild(document.createTextNode("testing")); // attacth the li to the bottom of the list. create a textNode as every doc has a textNode
    ul.appendChild(li);
})


