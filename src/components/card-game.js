export const cardGame = (gameData) => {
    return /*HTML*/ `
    <li>
        <a class="game-page-anchor" data-game="NumbrGuesser" onclick="window.onGameAnchorClicked('${gameData.gameTitle}')" href="#">
            <img
                class="game-img"
                src="./src/assets/images/pixel_art_island.png"
                alt="pixel art image of an island"
            />
            <h3 class="game-title">${gameData.gameTitle}</h3>
            <p class="game-desc">
                ${gameData.gameDescription}
            </p>
        </a>
    </li>`;
};
