import { addMessage, toggleDisplay, toggleDisable } from "../../utility/game-utils.js";
const elementButtonClicker = document.querySelector("#button-clicker");
const elementButtonRetry = document.querySelector("#button-retry");
const elementInfoScore = document.querySelector("#info-score");
const elementInfoTimer = document.querySelector("#info-timer");
const elementFormHighscore = document.querySelector("#form-highscore");
const elementHighscoreName = document.querySelector("#input-highscore-name");
const elementDisplayHighscore = document.querySelector("#display-highscore");
let scoreCount = 0;
let timeLimit = 1;
const highscoreObj = {
    list: [],
};
// TODO: add this to utility
const setLocalStorage = function (key, obj) {
    return localStorage.setItem(key, JSON.stringify(obj));
};
const getLocalStorage = function (key) {
    const storedData = localStorage.getItem(key);
    if (!storedData)
        return null;
    return JSON.parse(storedData);
};
const getHighscoreList = () => {
    if (!getLocalStorage("highscore"))
        setLocalStorage("highscore", highscoreObj);
    return getLocalStorage("highscore").list;
};
function onClickerClicked() {
    if (scoreCount === 0)
        timer(timeLimit);
    scoreCount++;
    addMessage(scoreCount.toString(), elementInfoScore);
}
function onRetry() {
    scoreCount = 0;
    toggleDisplay(elementFormHighscore, false);
    toggleDisplay(elementButtonRetry, false);
    toggleDisable(elementButtonClicker, false);
    addMessage(scoreCount.toString(), elementInfoScore);
    addMessage(timeLimit.toString(), elementInfoTimer);
}
const onAddHighscore = (e) => {
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
        elementDisplayHighscore.insertAdjacentHTML("afterbegin", `<li>${obj.name} - ${obj.score}</li>`);
    });
};
const checkHighScore = (score) => {
    var _a;
    console.log(highscoreObj);
    let highscore = (_a = highscoreObj.list[0]) === null || _a === void 0 ? void 0 : _a.score;
    if (score <= highscore)
        return;
    toggleDisplay(elementFormHighscore);
};
function timer(timeLimit) {
    const intervalId = window.setInterval(() => {
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
