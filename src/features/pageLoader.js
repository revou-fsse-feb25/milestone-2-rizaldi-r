import homePage from "../pages/home_page.js";
import gamePage from "../pages/game_page.js";
const root = document.querySelector("#root");
let gamePageAnchors;
let homePageAnchors;
const replaceElement = (elementString) => {
    if (root) {
        root.textContent = "";
        root.insertAdjacentHTML("beforeend", elementString);
    }
};
const onHomePageAnchorsClicked = (event) => {
    removeListener();
    replaceElement(homePage());
    setupPageNavigation();
};
const onGamePageAnchorsClicked = (event) => {
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
const removeListener = () => {
    for (let i = 0; i < homePageAnchors.length; i++) {
        homePageAnchors[i].removeEventListener("click", onHomePageAnchorsClicked);
    }
    for (let i = 0; i < gamePageAnchors.length; i++) {
        gamePageAnchors[i].removeEventListener("click", onGamePageAnchorsClicked);
    }
};
const setupPageNavigation = () => {
    gamePageAnchors = document.querySelectorAll(".game-page-anchor");
    homePageAnchors = document.querySelectorAll(".home-page-anchor");
    addListener();
    // console.log(gamePageAnchors, homePageAnchors);
};
replaceElement(homePage());
export default setupPageNavigation;
