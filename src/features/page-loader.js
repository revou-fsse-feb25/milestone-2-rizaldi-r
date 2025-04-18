import homePage from "../pages/home-page.js";
import gamePage from "../pages/game-page.js";
import { gameDataList } from "../games/game-data.js";
let gamePageAnchors;
let homePageAnchors;
const root = document.querySelector("#root");
const renderPage = (elementString) => {
    root.innerHTML = elementString;
};
// TODO: object type
const setPage = (page, dataObj) => {
    return () => {
        // console.log(dataObj);
        removeListeners();
        renderPage(page(dataObj));
        setPageNavigation();
    };
};
const onChangeHomePage = setPage(homePage);
const onChangeGamePage = (event) => {
    const gameTitle = event.currentTarget.getAttribute("data-game");
    const gameData = gameDataList.find(data => gameTitle === data.gameTitle);
    if (gameData)
        setPage(gamePage, gameData)();
};
const addListeners = () => {
    gamePageAnchors.forEach((anchor) => anchor.addEventListener("click", onChangeGamePage));
    homePageAnchors.forEach((anchor) => anchor.addEventListener("click", onChangeHomePage));
};
const removeListeners = () => {
    gamePageAnchors.forEach((anchor) => anchor.removeEventListener("click", onChangeGamePage));
    homePageAnchors.forEach((anchor) => anchor.removeEventListener("click", onChangeHomePage));
};
const setPageNavigation = () => {
    gamePageAnchors = document.querySelectorAll("[data-game]");
    homePageAnchors = document.querySelectorAll(".home-page-anchor");
    addListeners();
};
renderPage(homePage());
export default setPageNavigation;
