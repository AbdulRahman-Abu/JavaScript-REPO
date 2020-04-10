// getElementsByTagName      // getElementsByClassName   // getElementById
// querySelector     // querySelectorAll
//getAttribute       // setAttribute
// Changing Style with: style.property{}
// className      // classList
// Use codepen.io to find cool things of css people have done
// caniuse.com is used to check if all browsers have accepted a new feature
// innerHTML  to change html text in elements
// parentElement      // childrenElement
// It is important to CACHE selectors in vars.  
// Assign elements to vars to save memmory
// We are using DOMSelectors.html. Type the below in dev tools

document.getElementById("first");
document.getElementsByClassName("second");
document.getElementsByTagName("h1");
// to actually access the elements in the array
document.getElementsByClassName("p")[0];
document.getElementsByTagName("h1")[0];

// Using querySelector and querySeletorAll is most appropriate, more powerful and highly recommended instead of getElements
document.querySelector("h1");
document.querySelectorAll("li"); // this will grab all li
document.querySelector("li"); // this will grab the first li
document.querySelectorAll("h1", "li"); // selects all h1 and li elements

//Using get attibute to grab attributes or set attributes of elements
var select = document.querySelector("li"); // li
select.getAttribute("random"); // print out 23
// or
document.querySelector("li").getAttribute("random"); // 23
document.querySelector("li").setAttribute("random", "1000"); // this set it to 23
document.querySelector("li").getAttribute("random"); //this now gives 1000

//Changing Styles
// All elements have style properties

document.querySelector("h1").style.backgroundColor = "yellow";
// this gives h1 yellow background


// classList and className
var h1 = document.querySelector("h1");
h1.className = "coolTitle"; // This will make h1 have clasname of cooltitle and take the styling in css for .coolTitle

// We can use classList to add, remove, toggle, replace(etc) classes.
var li = document.querySelector("li"); // we are selecting the first li
li.classList.add("newClassList"); //this add a new class to li
document.querySelector("li").classList.remove("newClassList"); //this removes the classList

//classList has many option: add, remove, toggle etc


// innerHTML  to change html text in elements
document.querySelector("h1").innerHTML = "<strong>New Text</strong>";
// this changes: Shopping List to : New Text


// parentElement and childrenElement
document.querySelectorAll("li")[1]; // this brings out the "Jello" the second item in the array list
document.querySelector("li").parentElement; // this will bring ul as parent
document.querySelector("li").parentElement.children;// all children of ul