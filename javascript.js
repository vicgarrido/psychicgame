// possible guesses (alphabet)

var alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var computerGuess = [];
var userGuess = "";
var wins = 0;
var losses = 0;
var guessLeft = 5;
var guessedLetters = [];

// "psychic" letter

function getLetter() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
    console.log(computerGuess);
}

getLetter();

var updateGuessLeft = function() {
    document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessLeft;
}

function updateGuessedLetters() {
    document.querySelector("#guessed-letters").innerHTML = "Guessed Letters: " + guessedLetters.join(", ");
}

var reset = function() {
    guessLeft = 5;
    guessedLetters = [];
    updateGuessLeft();
    updateGuessedLetters();
}

// everything that happens when you press a key

document.onkeyup = function(event){
    userGuess = event.key;
    console.log(userGuess);
    if (userGuess === computerGuess) {
        wins++;
        alert("You ARE PSYCHIC AAAAAHHHH!!");
        getLetter();
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        reset();
        console.log(guessLeft);
        updateGuessLeft();
    } else {
    // updates number of guesses left
    guessLeft--;
    guessedLetters.push(userGuess);
    updateGuessLeft();
    updateGuessedLetters();
    console.log("Guess was incorrect");
    }

    // when you run out of guesses

    if (guessLeft === 0) {
        losses++;
        alert ("It's okay, I won't insult you. No one's perfect and it's important you learn from your mistakes, so give it another go, champ :)!");
        getLetter()
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset();
        updateGuessLeft();
    }
}
