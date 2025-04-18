import { addMessage, toggleDisplay, toggleDisable } from "../../utility/game-utils.js";

const elementButtonClicker: HTMLButtonElement = document.querySelector("#button-clicker")!;
const elementButtonRetry: HTMLButtonElement = document.querySelector("#button-retry")!;
const elementInfoScore: HTMLParagraphElement = document.querySelector("#info-score")!;
const elementInfoTimer: HTMLParagraphElement = document.querySelector("#info-timer")!;

const elementFormHighscore: HTMLFormElement = document.querySelector("#form-highscore")!;
const elementHighscoreName: HTMLInputElement = document.querySelector("#input-highscore-name")!;
const elementDisplayHighscore: HTMLParagraphElement = document.querySelector("#display-highscore")!;

let scoreCount: number = 0;
let timeLimit: number = 1;

const highscoreObj = {
    list: [],
};

// TODO: add this to utility
const setLocalStorage = function (key: string, obj) {
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

function onClickerClicked() {
    if (scoreCount === 0) timer(timeLimit);
    scoreCount++;
    addMessage(scoreCount.toString(), elementInfoScore);
}

function onRetry(): void {
    scoreCount = 0;
    toggleDisplay(elementFormHighscore, false);
    toggleDisplay(elementButtonRetry, false);
    toggleDisable(elementButtonClicker, false);
    addMessage(scoreCount.toString(), elementInfoScore);
    addMessage(timeLimit.toString(), elementInfoTimer);
}

const onAddHighscore = (e: Event): void => {
    e.preventDefault();
    let newScore = { name: elementHighscoreName.value, score: scoreCount };
    highscoreObj.list = getHighscoreList();
    highscoreObj.list.unshift(newScore);
    setLocalStorage("highscore", highscoreObj);
    displayHighscore();
    toggleDisplay(elementFormHighscore, false);
    // console.log(getHighscoreList());
};

const displayHighscore = () => {
    elementDisplayHighscore.textContent = "";
    getHighscoreList()
        .reverse()
        .forEach((obj) => {
            elementDisplayHighscore.insertAdjacentHTML(
                "afterbegin",
                `<li>${obj.name} - ${obj.score}</li>`
            );
        });
};

const checkHighScore = (score: number): void => {
    console.log(highscoreObj);
    let highscore: number = highscoreObj.list[0]?.score;
    if (score <= highscore) return;
    toggleDisplay(elementFormHighscore);
};

function timer(timeLimit: number) {
    const intervalId: number = window.setInterval(() => {
        addMessage((--timeLimit).toString(), elementInfoTimer);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        checkHighScore(scoreCount);
        toggleDisplay(elementButtonRetry);
        toggleDisable(elementButtonClicker);
    }, timeLimit * 1000);
}

elementButtonClicker.addEventListener("click", onClickerClicked);
elementButtonRetry.addEventListener("click", onRetry);
elementFormHighscore.addEventListener("submit", onAddHighscore);

highscoreObj.list = getHighscoreList();
displayHighscore();
addMessage(timeLimit.toString(), elementInfoTimer);
