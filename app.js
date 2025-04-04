let inputGuess = document.querySelector("#input-guess");
let inputRetry = document.querySelector("#input-retry");
let form = document.querySelector("#form");

let rangeMin = 0;
let rangeMax = 100;
let attemptMax = 5;

let attemptLeft = attemptMax;
let randomNumber = generateRandomNumber(rangeMin, rangeMax);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let playerGuess = parseInt(inputGuess.value);
    let isGuessValid = validate(playerGuess)

    if (!isGuessValid) { return }
    attemptLeft--;
    checkGuess(randomNumber, playerGuess, attemptLeft);
});

inputRetry.addEventListener("click", function (e) {
    randomNumber = generateRandomNumber(rangeMin, rangeMax);
    attemptLeft = attemptMax;
    inputGuess.value = null;
    toggleDisplay(false)
});

function generateRandomNumber(rangeMin, rangeMax) {
    return Math.floor(Math.random() * rangeMax) + rangeMin;
}

function validate(playerGuess) {
    let isGuessValid = playerGuess >= rangeMin && playerGuess <= rangeMax;

    if (!isGuessValid) {
        alert("Please enter a number between 1-100");
        return false;
    } else {
        return true;
    }
}

function checkGuess(secretNumber, playerGuess, attemptsLeft = 5) {
    if (attemptsLeft <= 0) {
        alert(`You lose! the number was ${secretNumber}, want to play again?`);
        toggleDisplay(true)
        return;
    }

    if (playerGuess === secretNumber) {
        alert("You guess the right number! want to play again?");
        toggleDisplay(true)
        return;
    } else if (playerGuess < secretNumber) {
        alert(`Higher! Attempts left: ${attemptsLeft}`);
    } else if (playerGuess > secretNumber) {
        alert(`Lower! Attempts left: ${attemptsLeft}`);
    }
    console.log(secretNumber);
}

function toggleDisplay(isHidden = false) {
    if (isHidden) {
        inputRetry.style.display = "block";
        form.style.display = "none";
    } else {
        inputRetry.style.display = "none";
        form.style.display = "block";
    }
}