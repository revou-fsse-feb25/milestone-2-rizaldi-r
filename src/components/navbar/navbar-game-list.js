export const navbarGameList = (gameTitle) => {
    return /*HTML*/ `
    <li>
        <a href="#" data-game="${gameTitle}" onclick="window.onGameAnchorClicked('${gameTitle}')">
            ${gameTitle}
        </a>
    </li>`;
};
