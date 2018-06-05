//Array of possible computer choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var myGuesses = [];
var computerGuess = [];


//Initial computer letter
window.onload = function() {
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuess.push(compGuess);
}


//Game
document.onkeyup = function(event) {
	var playerGuess = event.key;
	myGuesses.push(playerGuess);
    console.log(myGuesses);

if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	myGuesses.length = 0;
	computerGuess.length = 0;
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuess.push(compGuess);
    console.log(myGuesses);
}

else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 9;
	myGuesses.length = 0;
	computerGuess.length = 0;
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuess.push(compGuess);
}

var html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + myGuesses + "</p>";
 
document.querySelector("#game").innerHTML = html;

}