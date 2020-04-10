// Data Structures: Ways to store info.
// Types of Data Stustures: 1) ARRAY 2) OBJECT

// ARRAYS....The diff is the square bracket []. The are still vars. An array is a nice way to list items from index zero


var list = ["tiger", "lion", "elephant", "dog"];
list[0]; // this grabs: tiger

//Arrays can hold string, boolean, number, function eg below
var boolean = [true, false, true];
var number = [1, 5.5, 6, 9];
var functionList = [function apple() {
    console.log("apple");
}]

// We can have arrays inside array eg
var list = [
    ["tiger", "lion", "elephant", "dog"]
];
list[0]; // this is give all the items in the first array.
// To access the second array
console.log(list[0][2]); // this will grab: elephant

// METHODS: We can add methods to arrays
list.shift(); // this removes "tiger" ie the first element from the array
list.pop(); // this removes dog ie the last element from the array
list.push("elephant"); // this add elephant to the end of the array
list.concat(["bear", "fish"]); // this adds bear and fish to the array
list.length; // Gives the nos of elements in the array
list.sort(); // to sort the list in ascending order

// CONCAT...When you concat items to an array, the concat items do not get assigned to the original var. Rather a new var they get assigned eg
var newList = ["lion", "hen", "pig"];
newList.concat = (["tiger", "dog"]) // gives lion, hen, pig, tiger, dog
newList() //this only gives the original items: lion, hen, pig
