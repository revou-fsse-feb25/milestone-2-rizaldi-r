import homePage from "../pages/home_page.js";
import gamePage from "../pages/game_page.js";

const root: Element = document.querySelector("#root")!;

let gamePageAnchors: NodeListOf<Element>;
let homePageAnchors: NodeListOf<Element>;

const replaceElement = (elementString: string): void => {
    if (root) {
        root.textContent = "";
        root.insertAdjacentHTML("beforeend", elementString);
    }
};

const onHomePageAnchorsClicked = (event: Event) => {
    removeListener();
    replaceElement(homePage());
    setupPageNavigation();
};

const onGamePageAnchorsClicked = (event: Event) => {
    removeListener();
    replaceElement(gamePage());
    setupPageNavigation();
};

const addListener = () => {
    for (let i = 0; i < homePageAnchors.length; i++) {
        homePageAnchors[i].addEventListener("click", onHomePageAnchorsClicked);
    }
    for (let i = 0; i < gamePageAnchors.length; i++) {
        gamePageAnchors[i].addEventListener("click", onGamePageAnchorsClicked);
    }
};

const removeListener = (): void => {
    for (let i = 0; i < homePageAnchors.length; i++) {
        homePageAnchors[i].removeEventListener(
            "click",
            onHomePageAnchorsClicked
        );
    }
    for (let i = 0; i < gamePageAnchors.length; i++) {
        gamePageAnchors[i].removeEventListener(
            "click",
            onGamePageAnchorsClicked
        );
    }
};

const setupPageNavigation = (): void => {
    gamePageAnchors = document.querySelectorAll(".game-page-anchor");
    homePageAnchors = document.querySelectorAll(".home-page-anchor");
    addListener();
    // console.log(gamePageAnchors, homePageAnchors);
};

replaceElement(homePage());

export default setupPageNavigation;
