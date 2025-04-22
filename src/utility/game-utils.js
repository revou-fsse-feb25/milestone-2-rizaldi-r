function addMessage(message, htmlELement) {
    if (message)
        htmlELement.textContent = message;
}
function generateRandomNumber(rangeMin, rangeMax) {
    return Math.floor(Math.random() * rangeMax) + rangeMin;
}
function toggleDisplay(htmlElement, isShown = true, customDisplay = "initial") {
    if (!isShown)
        htmlElement.style.display = "none";
    else if (!customDisplay)
        htmlElement.style.display = "initial";
    else
        htmlElement.style.display = customDisplay;
}
function toggleDisable(htmlElement, isDisabled = true) {
    if (!isDisabled)
        htmlElement.disabled = false;
    else if (isDisabled)
        htmlElement.disabled = true;
    // htmlElement.disabled = !htmlElement.disabled
}
// function toggleDisplay(
//     htmlElement: HTMLElement,
//     isShown: boolean = true,
//     isInline: boolean = true
// ): void {
//     if (!isShown) htmlElement.style.display = "none";
//     else if (!isInline) htmlElement.style.display = "block";
//     else if (isInline) htmlElement.style.display = "inline-block";
// }
export { addMessage, generateRandomNumber, toggleDisplay, toggleDisable };
