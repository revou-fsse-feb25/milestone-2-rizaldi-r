let inputRangeForm = document.querySelector("#input-range-form");
let inputRangeMin = document.querySelector("#input-range-min");
let inputRangeMax = document.querySelector("#input-range-max");
let inputGuessForm = document.querySelector("#input-guess-form");
let inputGuess = document.querySelector("#input-guess");
let inputRetry = document.querySelector("#input-retry");
let infoRange = document.querySelector("#info-range");
let infoMessage = document.querySelector("#info-message");

let rangeMin = 0;
let rangeMax = 100;
let attemptMax = 5;

let attemptLeft = attemptMax;
let randomNumber = generateRandomNumber(rangeMin, rangeMax);

inputRangeForm.addEventListener("submit", onSubmitRange);
inputGuessForm.addEventListener("submit", onSubmitGuess);
inputRetry.addEventListener("click", onRetry);

function onSubmitRange(e) {
    e.preventDefault();
    rangeMin = parseInt(inputRangeMin.value);
    rangeMax = parseInt(inputRangeMax.value);
    let isRangeValid = validateRange(rangeMin, rangeMax);

    if (!isRangeValid) return;
    randomNumber = generateRandomNumber(rangeMin, rangeMax);
    addMessage(" ", infoMessage);
    addMessage(`${rangeMin}-${rangeMax}`, infoRange);
    toggleDisplay(false, inputRangeForm);
    toggleDisplay(true, inputGuessForm);
}

function onSubmitGuess(e) {
    e.preventDefault();
    let playerGuess = parseInt(inputGuess.value);
    let isGuessValid = validateGuess(playerGuess, rangeMin, rangeMax);

    if (!isGuessValid) return;
    attemptLeft--;
    checkGuess(randomNumber, playerGuess, attemptLeft);
}

function onRetry() {
    attemptLeft = attemptMax;
    inputGuess.value = null;
    toggleDisplay(false, inputRetry);
    toggleDisplay(true, inputRangeForm);
    addMessage(" ", infoMessage);
}

function generateRandomNumber(rangeMin, rangeMax) {
    return Math.floor(Math.random() * rangeMax) + rangeMin;
}

function addMessage(message, htmlELement) {
    if (message) htmlELement.textContent = message;
}

function validateRange(rangeMin, rangeMax) {
    if (rangeMin < 0) {
        addMessage("Enter a number greater than 0", infoMessage);
        return false;
    } else if (rangeMin >= rangeMax) {
        addMessage(
            "Maximum number should be greater than minimum number",
            infoMessage
        );
        return false;
    }
    return true;
}

function validateGuess(playerGuess, rangeMin, rangeMax) {
    let isGuessValid = playerGuess >= rangeMin && playerGuess <= rangeMax;

    if (!isGuessValid) {
        addMessage(
            `Please enter a number between ${rangeMin}-${rangeMax}`,
            infoMessage
        );
        return false;
    } else return true;
}

function toggleDisplay(isShown = true, htmlElement) {
    if (!isShown) {
        htmlElement.style.display = "none";
    } else {
        htmlElement.style.display = "block";
    }
}

function checkGuess(secretNumber, playerGuess, attemptsLeft = 5) {
    let message;

    // TODO: change into switch
    if (playerGuess === secretNumber) {
        message = "You guess the right number! want to play again?";
        toggleDisplay(false, inputGuessForm);
        toggleDisplay(true, inputRetry);
    } else if (attemptsLeft <= 0) {
        message = `You lose! the number was ${secretNumber}, want to play again?`;
        toggleDisplay(false, inputGuessForm);
        toggleDisplay(true, inputRetry);
    } else if (playerGuess < secretNumber) {
        message = `Higher! Attempts left: ${attemptsLeft}`;
    } else if (playerGuess > secretNumber) {
        message = `Lower! Attempts left: ${attemptsLeft}`;
    }
    addMessage(message, infoMessage);
    // console.log(secretNumber);
}
