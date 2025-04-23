import { gameDataList } from "../../games/game-data.js";
import { navbarGameList } from "./navbar-game-list.js";
import gamePage from "../../pages/game-page.js";
import homePage from "../../pages/home-page.js";
// TODO: put this into ots own file
const root = document.querySelector("#root");
const renderPage = (elementString) => {
    root.innerHTML = elementString;
};
window.onGameAnchorClicked = (gameTitle) => {
    const gameData = gameDataList.find((data) => gameTitle === data.gameTitle);
    renderPage(gamePage(gameData));
};
window.onHomeAnchorClicked = () => {
    renderPage(homePage());
};
const addNavbarGameList = (gameDataList) => {
    let gameListString = "";
    for (const gameData of gameDataList) {
        gameListString = gameListString.concat(navbarGameList(gameData.gameTitle));
    }
    return gameListString;
};
const navbar = () => {
    return /*HTML*/ `
    <header>
        <nav class="navbar">
            <div class="navbar-bar">
                <h1 class="navbar-logo">REVOFUN</h1>
                <button id="navbar-burger" class="navbar-burger">
                    <img src="./src/assets/svgs/burger.svg"/>
                </button>
                <!-- mobile -->
                <ul
                    id="navbar-menu-mobile"
                    class="navbar-menu-mobile navbar-menu"
                >
                    <li>
                        <a
                            class="navbar-menu-link home-page-anchor"
                            href="#" 
                            data-home="" 
                            onclick="window.onHomeAnchorClicked()"
                            >HOME
                        </a>
                    </li>
                    <li>
                        <a class="navbar-menu-link" href="#">ABOUT</a>
                    </li>
                    <li id="navbar-toggle-list">
                        <a class="navbar-menu-toggle">
                            <span class="navbar-menu-arrow">></span>
                            GAMES
                        </a>
                        <ul id="navbar-sub-menu" class="navbar-sub-menu">
                        ${addNavbarGameList(gameDataList)}
                        </ul>
                    </li>
                    <li class="navbar-menu-link">
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
                <!-- desktop -->
                <ul
                    id="navbar-menu-desktop"
                    class="navbar-menu-desktop navbar-menu"
                >
                    <li>
                        <a
                            class="navbar-menu-link home-page-anchor"
                            href="#"
                            data-home="" 
                            onclick="window.onHomeAnchorClicked()"
                            >HOME</a
                        >
                    </li>
                    <li>
                        <a class="navbar-menu-link" href="#">ABOUT</a>
                    </li>
                    <li id="navbar-toggle-list">
                        <a class="navbar-menu-toggle">
                        <span class="navbar-menu-arrow">></span>
                        GAMES
                        </a>
                        <ul id="navbar-sub-menu" class="navbar-sub-menu">
                        ${addNavbarGameList(gameDataList)}
                        </ul>
                    </li>
                    <li class="navbar-menu-link">
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div id="navbar-blur" class="navbar-blur"></div>
        </nav>
    </header>`;
};
export default navbar;
