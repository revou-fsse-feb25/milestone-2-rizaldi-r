import homePage from "../pages/home-page.js";
import gamePage from "../pages/game-page.js";
import { gameDataList } from "../games/game-data.js";

let gamePageAnchors: NodeListOf<Element>;
let homePageAnchors: NodeListOf<Element>;

const root = document.querySelector("#root")!;

const renderPage = (elementString: string): void => {
    root.innerHTML = elementString;
};

// TODO: object type
const setPage = (page: (dataObj?: object) => string, dataObj?: object) => {
    return () => {
        // console.log(dataObj);
        removeListeners();
        renderPage(page(dataObj));
        setPageNavigation();
    };
};

const onChangeHomePage = setPage(homePage);
const onChangeGamePage = (event: Event) => {
  const gameTitle = (event.currentTarget as HTMLElement).getAttribute("data-game")!;
  const gameData = gameDataList.find(data => gameTitle === data.gameTitle);
  if (gameData) setPage(gamePage, gameData)();
};

const addListeners = (): void => {
    gamePageAnchors.forEach((anchor) =>
        anchor.addEventListener("click", onChangeGamePage)
    );
    homePageAnchors.forEach((anchor) =>
        anchor.addEventListener("click", onChangeHomePage)
    );
};

const removeListeners = (): void => {
    gamePageAnchors.forEach((anchor) =>
        anchor.removeEventListener("click", onChangeGamePage)
    );
    homePageAnchors.forEach((anchor) =>
        anchor.removeEventListener("click", onChangeHomePage)
    );
};

const setPageNavigation = (): void => {
    gamePageAnchors = document.querySelectorAll("[data-game]");
    homePageAnchors = document.querySelectorAll(".home-page-anchor");
    addListeners();
};

renderPage(homePage());

export default setPageNavigation;
