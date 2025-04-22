import { addMessage, generateRandomNumber, toggleDisplay } from "../../utility/game-utils.js";
const elementsInputChoices = document.querySelectorAll(".input-choices");
const elementsInfoPlayerScore = document.querySelectorAll(".info-player-score");
const elementsInfoComputerScore = document.querySelectorAll(".info-computer-score");
const elementInfoComputerChoice = document.querySelector("#info-computer-choice");
const elementInfoPlayerChoice = document.querySelector("#info-player-choice");
const elementInfoRound = document.querySelector("#info-message-round");
const elementInfoGame = document.querySelector("#info-message-game");
const elementButtonRetry = document.querySelector("#input-retry");
const elementInfoGameOver = document.querySelector("#info-game-over");
const winningScore = 3;
const choices = ["rock", "paper", "scissors"];
const scores = {
    player: 0,
    computer: 0,
};
function updateScore(scoresObj, playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
        return "tie";
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        scoresObj.player++;
        return "player win";
    }
    else {
        scoresObj.computer++;
        return "computer win";
    }
}
function determineWinner(scoresObj, winningScore) {
    if (scoresObj.player >= winningScore) {
        toggleDisplay(elementInfoGameOver, true, "flex");
        return `player win this game`;
    }
    else if (scoresObj.computer >= winningScore) {
        toggleDisplay(elementInfoGameOver, true, "flex");
        return `computer win this game`;
    }
    return "";
}
const displayScore = (scoresObj) => {
    // scores.forEach((score) => addMessage(scores.player.toString(), elementsInfoPlayerScore))
    elementsInfoPlayerScore.forEach((element) => addMessage(scoresObj.player.toString(), element));
    elementsInfoComputerScore.forEach((element) => addMessage(scoresObj.computer.toString(), element));
};
const displayChoices = (playerChoice, computerChoice) => {
    addMessage(playerChoice, elementInfoPlayerChoice);
    addMessage(computerChoice, elementInfoComputerChoice);
};
const resetGame = (scoresObj) => {
    for (const key in scoresObj) {
        scoresObj[key] = 0;
    }
    toggleDisplay(elementInfoGameOver, false);
    displayScore(scores);
    // addMessage("", elementInfoGame);
};
const onRetry = () => {
    resetGame(scores);
};
function onChoiceButtonPressed(e) {
    let playerChoice = e.target.value;
    let computerChoice = choices[generateRandomNumber(0, choices.length)];
    // Object.values(scores).some(score => );
    addMessage(updateScore(scores, playerChoice, computerChoice), elementInfoRound);
    displayScore(scores);
    displayChoices(playerChoice, computerChoice);
    addMessage(determineWinner(scores, winningScore), elementInfoGame);
}
elementButtonRetry.addEventListener("click", onRetry);
elementsInputChoices.forEach((inputChoice) => {
    inputChoice.addEventListener("click", onChoiceButtonPressed);
});
