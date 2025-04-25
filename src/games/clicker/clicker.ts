import { addMessage, toggleDisplay, toggleDisable } from "../../utility/game-utils.js";

const elementButtonClicker: HTMLButtonElement = document.querySelector("#button-clicker")!;
const elementButtonRetry: HTMLButtonElement = document.querySelector("#button-retry")!;
const elementInfoScore: HTMLParagraphElement = document.querySelector("#info-score")!;
const elementInfoTimer: HTMLParagraphElement = document.querySelector("#info-timer")!;

const elementFormHighscore: HTMLFormElement = document.querySelector("#form-highscore")!;
const elementHighscoreName: HTMLInputElement = document.querySelector("#input-highscore-name")!;
const elementDisplayHighscore: HTMLParagraphElement = document.querySelector("#display-highscore")!;

let intervalUpdateTimerId: number | null = null;
let scoreCount: number = 0;
let timeLimit: number = 3;

interface Score {
    name: string;
    score: number;
}

const highscoreObj: {
    list: Score[];
} = {
    list: [],
};

// TODO: add this to utility
const setLocalStorage = function (key: string, obj: object) {
    return localStorage.setItem(key, JSON.stringify(obj));
};
const getLocalStorage = function (key: string) {
    const storedData = localStorage.getItem(key);
    if (!storedData) return null;
    return JSON.parse(storedData);
};

const getHighscoreList = () => {
    if (!getLocalStorage("highscore")) setLocalStorage("highscore", highscoreObj);
    return getLocalStorage("highscore").list;
};

const displayHighscore = () => {
    elementDisplayHighscore.textContent = "";
    getHighscoreList()
        .reverse()
        .forEach((obj: Score) => {
            elementDisplayHighscore.insertAdjacentHTML(
                "afterbegin",
                `<li>
                    <span>${obj.name}</span> 
                    <span>${obj.score}</span>
                </li>`
            );
        });
};

const checkHighScore = (score: number): void => {
    let highscore: number = highscoreObj.list[0]?.score;
    if (score <= highscore) return;
    toggleDisplay(elementFormHighscore, true, "block");
};

function timer(timeLimit: number) {
    intervalUpdateTimerId = window.setInterval(() => {
        addMessage((--timeLimit).toString(), elementInfoTimer);
        if (timeLimit <= 0) {
            clearInterval(intervalUpdateTimerId!);
            intervalUpdateTimerId = null;
            checkHighScore(scoreCount);
            toggleDisplay(elementButtonRetry);
            toggleDisable(elementButtonClicker);
        }
    }, 1000);
}

function onClickerClicked() {
    if (scoreCount === 0) timer(timeLimit);
    scoreCount++;
    addMessage(scoreCount.toString(), elementInfoScore);
}

function onRetry(): void {
    scoreCount = 0;
    if (intervalUpdateTimerId) {
        clearInterval(intervalUpdateTimerId);
        intervalUpdateTimerId = null;
    }
    toggleDisplay(elementFormHighscore, false);
    toggleDisable(elementButtonClicker, false);
    addMessage(scoreCount.toString(), elementInfoScore);
    addMessage(timeLimit.toString(), elementInfoTimer);
}

const onAddHighscore = (e: Event): void => {
    e.preventDefault();
    let newScore: Score = { name: elementHighscoreName.value, score: scoreCount };
    highscoreObj.list = getHighscoreList();
    highscoreObj.list.unshift(newScore);
    setLocalStorage("highscore", highscoreObj);
    displayHighscore();
    toggleDisplay(elementFormHighscore, false);
};

elementButtonClicker.addEventListener("click", onClickerClicked);
elementButtonRetry.addEventListener("click", onRetry);
elementFormHighscore.addEventListener("submit", onAddHighscore);

highscoreObj.list = getHighscoreList();
displayHighscore();
addMessage(timeLimit.toString(), elementInfoTimer);
