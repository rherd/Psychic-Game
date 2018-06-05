//the alphabet
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// instantiate variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var myGuesses = [];
var computerGuesses = [];


//initialize guess
    var compGuess = letters[Math.floor(Math.random() * letters.length)];
    //picks a random letter, pushes it to the array at the end so that the most recent computer guess is the one we're comparing against
    computerGuesses.push(compGuess);
    console.log(computerGuesses);



//Game
//when the user presses a key, add it to the array of guesses at the end using push
document.onkeyup = function(event) {
	var playerGuess = event.key;
	myGuesses.push(playerGuess);
    console.log(myGuesses);

// if the player guess equals the current computer guess and you have any guesses left, add one to the wins, reset myGuesses, reset the counter of guesses left to 9, come up with a new guess
if ((playerGuess === computerGuesses[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	myGuesses.length = 0;
	computerGuesses.length = 0;
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
	computerGuesses.push(compGuess);
    console.log(myGuesses);
}

//if you guess wrong and you still have guesses remaining, lose a guess
else if ((playerGuess !== computerGuesses[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

//the remaining scenario is if you guess wrong and have no guesses remaining
//add one to the loss column, restart the game, reset guesses remaining
else {
	losses++;
	guessesLeft = 9;
	myGuesses.length = 0;
	computerGuesses.length = 0;
	var compGuess = letters[Math.floor(Math.random() * letters.length)];
    computerGuesses.push(compGuess);
    console.log(computerGuesses)
}


//update html with new wins, losses, guessesLeft, myGuesses
var updatedHtml = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + myGuesses + "</p>";
 
document.querySelector("#game").innerHTML = updatedHtml;

}