import { cardGame } from "../components/card-game.js";
import { GameDataList, gameDataList } from "../games/game-data.js";

const addGameCard = (gameDataList: Array<GameDataList>) => {
    let gameCardString: string = "";
    for (const gameData of gameDataList) {
        gameCardString = gameCardString.concat(cardGame(gameData));
    }
    return gameCardString;
};

const homePage = () => {
    return /*html*/`
        <div class="main-container">
            <section id="home" class="home">
                <div class="home-main">
                    <div class="home-star">
                        <img src="./src/assets/svgs/star.svg"/>
                    </div>
                    <div class="home-text">
                        <h2 class="title">WE LOVE TO MAKE GAMES</h2>
                        <p class="home-text-desc">
                            Revofun is a passionate team dedicated to crafting
                            short but punchy experiences! We believe that fun
                            shouldn't require hefty downloads.
                        </p>
                    </div>
                </div>
                <svg
                    class="home-triangle"
                    width="52"
                    height="64"
                    viewBox="0 0 52 64"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M47.4046 53.0989C47.4046 56.9602 42.4746 58.5802 40.1842 55.4715L5.69512 8.65989C3.74926 6.01881 5.63497 2.28726 8.91546 2.28727L43.4046 2.28727C45.6137 2.28727 47.4046 4.07813 47.4046 6.28727L47.4046 53.0989Z"
                        fill="#E6E9E0"
                    />
                </svg>
                <img
                    class="home-duck"
                    src="./src/assets/images/duck_idle.gif"
                    alt="animation of dancing cartoon duck"
                />
            </section>

            <section id="games" class="games">
                <h2 class="games-title title-sub">Explore Our Games</h2>
                <ul class="games-list">
                    ${addGameCard(gameDataList)}
                </ul>
            </section>
        </div>
    `;
};

export default homePage;