function addMessage(message: string, htmlELement: HTMLElement): void {
    if (message) htmlELement.textContent = message;
}

function generateRandomNumber(rangeMin: number, rangeMax: number): number {
    return Math.floor(Math.random() * rangeMax) + rangeMin;
}

function toggleDisplay(htmlElement: HTMLElement, isShown: boolean = true): void {
    if (!isShown) htmlElement.style.display = "none";
    else htmlElement.style.display = "initial";
}

function toggleDisable(
    htmlElement: HTMLButtonElement | HTMLInputElement,
    isDisabled: boolean = true
): void {
    if (!isDisabled) htmlElement.disabled = false;
    else if (isDisabled) htmlElement.disabled = true;
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
