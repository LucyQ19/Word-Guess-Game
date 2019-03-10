//Create an array of words

var wordList = [
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
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var hasFinished = false;
var wins = 0;

function resetGame() {
    remainingGuesses = maxTries;

    currentWordIndex = Math.floor(Math.random() * (wordList.length));

    guessedLetters = [];
    guessedWord = [];

    for (var i = 0; i< wordList[currentWord].length; i++) {
    guessingWord.push("_");
    }

    updateDisplay();
};

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    
    var guessingWord = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessingWord += guessWord[i];
    }

    document.getElementById("currentWord").innerText = currentWordText;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }

};

function evaluateGuess(letter) {
    var positions = [];

    for (var i = 0; i < wordList[currentWordIndex].length; i++) {
        if(wordList[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    if(positions.length <= 0) {
        remainingGuesses--;
    } else {
        for(var i = 0; i < positions.length; i++) {
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

document.onkeydown = function(event) {
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
       if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toUpperCase());
        updateDisplay();
        checkWin();
        checkLoss();
       }
    }
};