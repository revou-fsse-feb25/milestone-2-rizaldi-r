import { addMessage, generateRandomNumber, toggleDisplay } from "../../utility/game-utils.js";
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
    if (!isRangeValid)
        return;
    randomNumber = generateRandomNumber(rangeMin, rangeMax);
    addMessage(" ", infoMessage);
    addMessage(`${rangeMin}-${rangeMax}`, infoRange);
    toggleDisplay(inputRangeForm, false);
    toggleDisplay(inputGuessForm, true);
}
function onSubmitGuess(e) {
    e.preventDefault();
    let playerGuess = parseInt(inputGuess.value);
    let isGuessValid = validateGuess(playerGuess, rangeMin, rangeMax);
    if (!isGuessValid)
        return;
    attemptLeft--;
    checkGuess(randomNumber, playerGuess, attemptLeft);
}
function onRetry() {
    attemptLeft = attemptMax;
    inputGuess.value = "";
    toggleDisplay(inputRetry, false);
    toggleDisplay(inputRangeForm, true);
    addMessage(" ", infoMessage);
}
function validateRange(rangeMin, rangeMax) {
    if (rangeMin < 0) {
        addMessage("Enter a number greater than 0", infoMessage);
        return false;
    }
    else if (rangeMin >= rangeMax) {
        addMessage("Maximum number should be greater than minimum number", infoMessage);
        return false;
    }
    else
        return true;
}
function validateGuess(playerGuess, rangeMin, rangeMax) {
    let isGuessValid = playerGuess >= rangeMin && playerGuess <= rangeMax;
    if (!isGuessValid) {
        addMessage(`Please enter a number between ${rangeMin}-${rangeMax}`, infoMessage);
        return false;
    }
    else
        return true;
}
function checkGuess(secretNumber, playerGuess, attemptsLeft = 5) {
    let message;
    switch (true) {
        case playerGuess === secretNumber:
            message = "You guess the right number! want to play again?";
            toggleDisplay(inputGuessForm, false);
            toggleDisplay(inputRetry, true);
            break;
        case attemptsLeft <= 0:
            message = `You lose! the number was ${secretNumber}, want to play again?`;
            toggleDisplay(inputGuessForm, false);
            toggleDisplay(inputRetry, true);
            break;
        case playerGuess < secretNumber:
            message = `Higher! Attempts left: ${attemptsLeft}`;
            break;
        case playerGuess > secretNumber:
            message = `Lower! Attempts left: ${attemptsLeft}`;
            break;
        default:
            message = "Unexpected condition";
    }
    addMessage(message, infoMessage);
    // console.log(secretNumber);
}
