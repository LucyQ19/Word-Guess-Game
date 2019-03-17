//Global Variables
var wordList = ["rachel", "monica", "phoebe", "ross", "chandler", "joey", "gunther", "janice", "marcel", "ursula" ];

var randomWord = "";
var lettersArray = [];
var wrongGuess = [];

//Count Variables
var guessesRemaining = 10;
var wins = 0;
var losses = 0;

//Main Game Loop

function startGame() {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    for (var i = 0; i < randomWord.length; i++) {
        lettersArray[i] = "_";
    }

    document.getElementById("currentWord").innerHTML = " " + lettersArray.join(" ");
};

function gif(){

    if (randomWord === "rachel") {
        document.getElementById("image").src = "assets/images/rachelGreen.gif";
    }

    else if (randomWord === "monica") {
        document.getElementById("image").src = "assets/images/monicaGeller.gif";
    }

    else if (randomWord === "phoebe") {
        document.getElementById("image").src = "assets/images/phoebeBuffay.gif";
    }

    else if (randomWord === "ross") {
        document.getElementById("image").src = "assets/images/rossGeller.gif";
    }

    else if (randomWord === "chandler") {
        document.getElementById("image").src = "assets/images/chandlerBing.gif";
    }

    else if (randomWord === "joey") {
        document.getElementById("image").src = "assets/images/joeyTribbiani.gif";
    }

    else if (randomWord === "gunther") {
        document.getElementById("image").src = "assets/images/guntherFriend.gif";
    }

    else if (randomWord === "janice") {
        document.getElementById("image").src = "assets/images/janiceGoralnik.gif";
    }

    else if (randomWord === "marcel") {
        document.getElementById("image").src = "assets/images/marcelMonkey.gif";
    }

    else if (randomWord === "ursula") {
        document.getElementById("image").src = "assets/images/ursulaBuffay.gif";
    }

};

//Reset Function
function reset() {
    lettersArray = [];
    wrongGuess = [];
    guessesRemaining = 10;
    startGame()
};

//Check Letters
function checkLetters (letter) {
    var letterInWord = false;

    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letter) {
                lettersArray[i] = letter;
            }
        }
    }

    else if (wrongGuess.indexOf(letter) === - 1) {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
};

function completeGame() {
    if (lettersArray.indexOf("_") == -1) {
        wins++;
        reset();
        document.getElementById("totalWins").innerHTML = wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset();
        document.getElementById("totalLosses").innerHTML = losses;
    }

    document.getElementById("currentWord").innerHTML = " " + lettersArray.join(" ");
    document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
};

startGame();

document.onkeyup = function (event) {
    var guesses = event.key;
    checkLetters(guesses);
    completeGame();
    document.getElementById("guessedLetters").innerHTML = " " + wrongGuess.join(" ");
};
