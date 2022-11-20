'use strict';

let num = 13;

if (num % 2 == 0) {
	console.log("number is even");
} else {
	console.log("number is odd");
}

let age = 2;

if (age >= 18) {
	console.log("user can play games");
} else {
	console.log("user can not play game");
}

// falsy values

// false
// ""
// null
// undefined
// 0

let fName = false;

if (fName) {
	console.log(fName);
} else {
	console.log(`fName is falsy value`)
}

// conditional operator SIMILAR TO LIST COMPREHENSION IN PYTHON

let ageOfPerson = 8;
let drink = ageOfPerson >= 5 ? 'coffee' : 'milk';

console.log(drink)

// AND OPERATOR &&
let MyName = "Amit"
if (ageOfPerson >= 55 && MyName[0] === "A") {
	console.log("test pass")
} else {
	console.log("test failed")
}

// OR OPERATOR (||) PIPE WHICH IS ABOVE ENTER BUTTON


// NESTED IF

let winningNumber = 20;
let userGuess = +prompt("guess a number");

if (userGuess === winningNumber) {
	console.log("guess is right");
} else {
	if (userGuess > winningNumber) {
		console.log("guess is more");
	} else {
		console.log("too low")
	}
}



