var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");

// this below didnt work for me

function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    +color2.value
    +")";

    css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


/*
Practice DRY so we created a fn above
color1.addEventListener("input", function() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    +color2.value
    +")";

})

color2.addEventListener("input", function() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    +color2.value
    +")";
})


*/
