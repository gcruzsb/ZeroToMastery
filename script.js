//Build Facebook 
//We need a list of multiple users, so we used an array for that. 
//Based on if the login info is right or wrong, you will either get 
//the newsfeed or an alert that says it's wrong. 

var database = [
	{
	username: "gabi",
	password: "topsecret"
	}
];

var newsFeed = [
{
	username: "Bobby",
	timeline: "So tired"
},
{
	username: "Sally",
	timeline: "Javascript is so cool"
}

];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

function signIn(user, pass) { 
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsFeed);
	} else { 
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);