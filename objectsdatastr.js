// OBJECTS are paths of data structures. Objs are still JavaScript types but Arrays are not
// Objects are collections of properties. Objs are more dynamic than array. Arrays have index, objs have properties and values
// Objs are good for containing users info while arrays are good for like shopping list
// Undefined: When you dont declare a var

var user = {
    name: "Ray",
    age: 30,
    location: "lagos",
    married: false
}
user.name; // Ray
user.age; // 30

user.favoriteFood = "spinach"; // this adds a new property and value to the obj
user.married = true; // this changes the value of false to true dynamically

// NOTE..We can have arrays inside objects and we can have objects inside arrays eg

var user = {
    name: "Ray",
    age: 30,
    location: "lagos",
    married: false,
    spells: ["shazam", "abracadabra", "shikemenana"]
}
user.spells[0]; // shazam

var list = [
    {
        name: "Ray",
        password: "abcdef"
    },
    {
        name: "Ejike",
        password: 123456,
    }
];
list[0].name; // Ray
list[1].name; // Ejike

// We can add functions to objects
var user = {
    name: "Ray",
    age: 30,
    location: "lagos",
    married: false,
    spells: ["shazam", "abracadabra", "shikemenana"],
    shout: function() {
        console.log("AHAHAHAHAHAHA");        
    }   
}
user.shout(); // AHAHAHAHAHAHA
// shout: is a method of "user"
// console.log : console is an object, log is a method to console
// we can do console.info("hello"), console.error("hey").
// type console in dev tools to see more methods