// LOOPING IN JavaScript
// for.....used mostly
// while
// do
// forEach.... newly introduced in ECMAScript 5


var morningTodos = [
    "brush teeth",
    "bath",
    "clean the furniture",
    "warm the food",
    "coding"
]

for (var i = 0; i < morningTodos.length; i++) {
    console.log(i); // this gives 0 1 2 3 4
}
// i here means index. ; ends every expression

for (var i = 0; i < morningTodos.length; i++) {
    console.log(morningTodos[i] + "!");
}
// the above prints out the entire array
// brush teeth! bath! clean the furniture! warm the food!  coding!

for (var i = 0; i < morningTodos.length; i++) {
    morningTodos[i] = morningTodos[i] + "!";
}
// morningTodos can now be accessed permanently on dev tools with ! on all elements
// eg coding = coding + ! ie coding!

morningTodos.pop();
todosLenght = morningTodos.length;

// WHILE LOOP
// You have to declare a var counter first

var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++
}
// 0 1 2 3 4 5 6 7 8 9........the ans when it runs

// DO...WHILE LOOP
// The Do ..While runs first before checking the condition unlike the WHILE loop that has to check condition to determine if to run
// You have to declare a var counter first just like WHILE LOOP

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} 
 while(counterTwo > 0);
 // 10 9 8 7 6 5 4 3 2 1.... the answer

 // forEach.... this is simpler than the FOR Loop

morningTodos.forEach(function(morningTodos, i) {
    console.log(morningTodos, i);
})
// brush teeth 0
// bath 1
// clean the furniture 2
// warm the food 3
// coding 4


// the below does the exact same thing and I understand it very well
function logTodos(morningTodos, i) {
    console.log(morningTodos, i);
}
morningTodos.forEach(logTodos);
// this fn(logTodos) can now be used in other places if you have another list eg

newchores = [
    "cook food!",
    "watch tv!",
    "bath!",
    "code!"
]
newchores.forEach(logTodos);
// cook food! 0
// watch tv! 1
// bath! 2
// code! 3

