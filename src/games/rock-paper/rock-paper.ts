import { addMessage, generateRandomNumber, toggleDisplay } from "../../utility/game-utils.js";

const elementsInputChoices: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".input-choices");
const elementsInfoPlayerScore: NodeListOf<HTMLElement> =
    document.querySelectorAll(".info-player-score")!;
const elementsInfoComputerScore: NodeListOf<HTMLElement> =
    document.querySelectorAll(".info-computer-score")!;
const elementInfoComputerChoice: HTMLParagraphElement =
    document.querySelector("#info-computer-choice")!;
const elementInfoPlayerChoice: HTMLParagraphElement =
    document.querySelector("#info-player-choice")!;
const elementInfoRound: HTMLParagraphElement = document.querySelector("#info-message-round")!;
const elementInfoGame: HTMLParagraphElement = document.querySelector("#info-message-game")!;
const elementButtonRetry: HTMLButtonElement = document.querySelector("#input-retry")!;
const elementInfoGameOver: HTMLElement = document.querySelector("#info-game-over")!;

const winningScore = 3;
const choices: string[] = ["🪨", "📃", "✂️"];

interface Scores {
    player: number;
    computer: number;
}
const scores: Scores = {
    player: 0,
    computer: 0,
};

function updateScore(scoresObj: Scores, playerChoice: string, computerChoice: string): string {
    // pake switch case
    if (playerChoice === computerChoice) return "tie";
    else if (
        (playerChoice === "🪨" && computerChoice === "✂️") ||
        (playerChoice === "📃" && computerChoice === "🪨") ||
        (playerChoice === "✂️" && computerChoice === "📃")
    ) {
        scoresObj.player++;
        return "Player win";
    } else {
        scoresObj.computer++;
        return "Computer win";
    }
}

function determineWinner(scoresObj: Scores, winningScore: number): string {
    if (scoresObj.player >= winningScore) {
        toggleDisplay(elementInfoGameOver, true, "flex");
        return `player win this game`;
    } else if (scoresObj.computer >= winningScore) {
        toggleDisplay(elementInfoGameOver, true, "flex");
        return `computer win this game`;
    }
    return "";
}

const displayScore = (scoresObj: Scores): void => {
    // scores.forEach((score) => addMessage(scores.player.toString(), elementsInfoPlayerScore))
    elementsInfoPlayerScore.forEach((element) => addMessage(scoresObj.player.toString(), element));
    elementsInfoComputerScore.forEach((element) =>
        addMessage(scoresObj.computer.toString(), element)
    );
};

const displayChoices = (playerChoice: string, computerChoice: string): void => {
    addMessage(playerChoice, elementInfoPlayerChoice);
    addMessage(computerChoice, elementInfoComputerChoice);
};

const resetGame = (scoresObj: Scores): void => {
    for (const key in scoresObj) {
        scoresObj[key as keyof Scores] = 0;
    }
    toggleDisplay(elementInfoGameOver, false);
    displayScore(scores)
    // addMessage("", elementInfoGame);
};

const onRetry = () => {
    resetGame(scores);
};

function onChoiceButtonPressed(e: Event): void {
    let playerChoice: string = (e.target as HTMLButtonElement).value;
    let computerChoice: string = choices[generateRandomNumber(0, choices.length)];
    // Object.values(scores).some(score => );
    addMessage(updateScore(scores, playerChoice, computerChoice), elementInfoRound);
    displayScore(scores);
    displayChoices(playerChoice, computerChoice);
    addMessage(determineWinner(scores, winningScore), elementInfoGame);
}

elementButtonRetry.addEventListener("click", onRetry);
elementsInputChoices.forEach((inputChoice: HTMLButtonElement) => {
    inputChoice.addEventListener("click", onChoiceButtonPressed);
});
