var database = [
    {
        username: "abdul",
        password: "secret"
    },
    {
        username: "aniekan",
        password: "ball@123"
    },
    {
        username: "henry",
        password: "user@123"
    }
]

var newsFeed = [
    {
        username: "Ejike",
        feeds: "This weather is so cool. I love it!"
    },
    {
        username: "Ocheli",
        feeds: "There is obviously no lock down in Lagos"
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
      if (database[i].username === username && 
          database[i].password === password) {
             return true;
    }
    } return false;
}

function signIn(user, pass) {
    if(isUserValid(user, pass)) {
        console.log(newsFeed);
    }
    else {
        alert("Wrong username and password");
    }
}
signIn(userNamePrompt, passwordPrompt); 



// Use this fn below to confirm if the user authentication works fine
// function signIn(user, pass) {
//     console.log(isUserValid(user, pass)); 
// }

// we pass in userNamePrompt and passwordPrompt as these are the vars requesting and receiving the parameters


// function signIn(user, pass) {
//     if (user === database.username && 
//         pass === database.password) {
//         console.log(newsFeed);
//     } else{
//         alert("Wrong username and password");
//     }
// }
// signIn();