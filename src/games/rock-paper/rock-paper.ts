import { addMessage, generateRandomNumber } from "../../utility/game-utils.js";

const elementInputChoices: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".input-choices");
const elementInfoComputerChoice: HTMLParagraphElement =
    document.querySelector("#info-computer-choice")!;
const elementInfoPlayerChoice: HTMLParagraphElement =
    document.querySelector("#info-player-choice")!;
const elementInfoMessage: HTMLParagraphElement = document.querySelector("#info-message")!;

const choices: string[] = ["rock", "paper", "scissors"];

elementInputChoices.forEach((inputChoice: HTMLButtonElement) => {
    inputChoice.addEventListener("click", onChoiceButtonPressed);
});

function onChoiceButtonPressed(e: Event): void {
    const playerChoice: string = (e.target as HTMLButtonElement).value;
    const computerChoice: string = choices[generateRandomNumber(0, choices.length)];
    addMessage(playerChoice, elementInfoPlayerChoice);
    addMessage(computerChoice, elementInfoComputerChoice);
    addMessage(determineWinner(playerChoice, computerChoice), elementInfoMessage);
}

function determineWinner(playerChoice: string, computerChoice: string): string {
    if (playerChoice === computerChoice) return "its a tie";
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    )
        return "You win!";
    return "You lose!";
}
