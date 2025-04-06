let inputChoices = document.querySelectorAll(".input-choices");
let infoComputerChoice = document.querySelector("#info-computer-choice");
let infoPlayerChoice = document.querySelector("#info-player-choice");
let infoMessage = document.querySelector("#info-message");

const choices = ["rock", "paper", "scissors"];

for (let i = 0; i < inputChoices.length; i++) {
    let inputChoice = inputChoices[i];
    inputChoice.addEventListener("click", onChoiceButtonPressed);
}

function onChoiceButtonPressed(e) {
    let playerChoice = e.target.value;
    let computerChoice = chooseRandomChoices();
    console.log(" :23 ~ onChoiceButtonPressed ~ playerChoice:", playerChoice);
    determineWinner(playerChoice, computerChoice);
}

function addMessage(message, htmlELement) {
    if (message) htmlELement.textContent = message;
}

function generateRandomNumber(rangeMin, rangeMax) {
    return Math.floor(Math.random() * rangeMax) + rangeMin;
}

function chooseRandomChoices() {
    let randomNumber = generateRandomNumber(0, choices.length);
    return choices[randomNumber];
}

function determineWinner(playerChoice, computerChoice) {
    let message = "";
    if (playerChoice === computerChoice) {
        message = "its a tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        // win condition
        message = "You win!";
    } else {
        // lose condition
        message = "You lose!";
    }
    addMessage(playerChoice, infoPlayerChoice);
    addMessage(computerChoice, infoComputerChoice);
    addMessage(message, infoMessage);
}
