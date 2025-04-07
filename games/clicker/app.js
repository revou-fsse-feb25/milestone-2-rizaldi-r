const buttonClicker = document.querySelector("#button-clicker");
const buttonRetry = document.querySelector("#button-retry");
const infoScore = document.querySelector("#info-score");
const infoTimer = document.querySelector("#info-timer");

let scoreCount = 0;
let timeLimit = 3;

buttonClicker.addEventListener("click", onButtonClickerCliked);
buttonRetry.addEventListener("click", onButtonRetryClicked);
addMessage((timeLimit).toString(), infoTimer);

function onButtonClickerCliked() {
    if (scoreCount === 0) timer(timeLimit);
    scoreCount++;
    addMessage(scoreCount, infoScore);
}

function onButtonRetryClicked() {
    scoreCount = 0;
    toggleDisplay(buttonRetry, false);
    toggleDisable(buttonClicker, false);
    addMessage((timeLimit).toString(), infoTimer);
}

function addMessage(message, htmlELement) {
    if (message) htmlELement.textContent = message;
}

function toggleDisplay(htmlElement, isShown = true, isInline = true) {
    if (!isShown) htmlElement.style.display = "none";
    else if (!isInline) htmlElement.style.display = "block";
    else if (isInline) htmlElement.style.display = "inline-block";
}

function toggleDisable(htmlElement, isDisabled = true) {
    if (!isDisabled) htmlElement.disabled = false;
    else if (isDisabled) htmlElement.disabled = true;
    // htmlElement.disabled = !htmlElement.disabled
}

function timer(timeLimit) {
    const intervalId = setInterval(() => {
        addMessage((--timeLimit).toString(), infoTimer);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        toggleDisplay(buttonRetry);
        toggleDisable(buttonClicker);
    }, timeLimit * 1000);
}
