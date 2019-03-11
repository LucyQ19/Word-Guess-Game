//Create an array of words

var WordList = [
    "americano",
    "cappuccino",
    "coffee",
    "espresso",
    "latte",
    "macchiato",
    "mocha"
];

const maxTries = 10;

var guessedLetters = [];
var currentWord = "";
var guessingWord = [];
var remainingGuesses = 0;
var gameBegan = false;
var hasFinished = false;
var wins = 0;

function resetGame() {
    remainingGuesses = maxTries;
    gameBegan = false;

    currentWord = Math.floor(Math.random() * (wordList.length));

    guessedLetters = [];
    guessedWord = [];

    for (var i = 0; i < wordList[currentWord].length; i++) {
    guessingWord.push("_");
    }

    updateDisplay();
};

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    
    for (var i = 0; i < guessingWord.length; i++) {
       document.getElementById("currentWord").innerText += guessingWord[i];
    }

    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;

    if(remainingGuesses <= 0) {
        hasFinished = true;
    }
};

document.onkeydown = function(event) {
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
       if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toUpperCase());
       }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameBegan) {
            gameStarted = true;
        }
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
};

function evaluateGuess(letter) {
    var positions = [];

    for (var i = 0; i < wordList[currentWord].length; i++) {
        if(wordList[currentWord][i] === letter) {
            positions.push(i);
        }
    }

    if(positions.length <= 0) {
        remainingGuesses--;
    } else {
        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        wins++;
        hasFinished = true;
    }
};

function checkLoss() {
    if(remainingGuesses <= 0) {
        hasFinished = true;
    }
};
