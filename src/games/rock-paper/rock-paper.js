import { addMessage, generateRandomNumber } from "../../utility/game-utils.js";
const elementInputChoices = document.querySelectorAll(".input-choices");
const elementInfoComputerChoice = document.querySelector("#info-computer-choice");
const elementInfoPlayerChoice = document.querySelector("#info-player-choice");
const elementInfoMessage = document.querySelector("#info-message");
const choices = ["rock", "paper", "scissors"];
elementInputChoices.forEach((inputChoice) => {
    inputChoice.addEventListener("click", onChoiceButtonPressed);
});
function onChoiceButtonPressed(e) {
    const playerChoice = e.target.value;
    const computerChoice = choices[generateRandomNumber(0, choices.length)];
    addMessage(playerChoice, elementInfoPlayerChoice);
    addMessage(computerChoice, elementInfoComputerChoice);
    addMessage(determineWinner(playerChoice, computerChoice), elementInfoMessage);
}
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
        return "its a tie";
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper"))
        return "You win!";
    return "You lose!";
}
