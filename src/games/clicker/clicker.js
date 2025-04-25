import { addMessage, toggleDisplay, toggleDisable } from "../../utility/game-utils.js";
const elementButtonClicker = document.querySelector("#button-clicker");
const elementButtonRetry = document.querySelector("#button-retry");
const elementInfoScore = document.querySelector("#info-score");
const elementInfoTimer = document.querySelector("#info-timer");
const elementFormHighscore = document.querySelector("#form-highscore");
const elementHighscoreName = document.querySelector("#input-highscore-name");
const elementDisplayHighscore = document.querySelector("#display-highscore");
let intervalUpdateTimerId = null;
let scoreCount = 0;
let timeLimit = 3;
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
const displayHighscore = () => {
    elementDisplayHighscore.textContent = "";
    getHighscoreList()
        .reverse()
        .forEach((obj) => {
        elementDisplayHighscore.insertAdjacentHTML("afterbegin", `<li>
                    <span>${obj.name}</span> 
                    <span>${obj.score}</span>
                </li>`);
    });
};
const checkHighScore = (score) => {
    var _a;
    let highscore = (_a = highscoreObj.list[0]) === null || _a === void 0 ? void 0 : _a.score;
    if (score <= highscore)
        return;
    toggleDisplay(elementFormHighscore, true, "block");
};
function timer(timeLimit) {
    intervalUpdateTimerId = window.setInterval(() => {
        addMessage((--timeLimit).toString(), elementInfoTimer);
        if (timeLimit <= 0) {
            clearInterval(intervalUpdateTimerId);
            intervalUpdateTimerId = null;
            checkHighScore(scoreCount);
            toggleDisplay(elementButtonRetry);
            toggleDisable(elementButtonClicker);
        }
    }, 1000);
}
function onClickerClicked() {
    if (scoreCount === 0)
        timer(timeLimit);
    scoreCount++;
    addMessage(scoreCount.toString(), elementInfoScore);
}
function onRetry() {
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
const onAddHighscore = (e) => {
    e.preventDefault();
    let newScore = { name: elementHighscoreName.value, score: scoreCount };
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
