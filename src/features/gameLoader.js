let gamePageAnchors = document.querySelectorAll(".game-page-anchor");
const root = document.querySelector("#root");
const replaceElement = (elementString) => {
    if (root) {
        root.insertAdjacentHTML("beforeend", elementString);
    }
};
const onChangeGame = (event) => {
    removeListener();
    setChangeGame();
};
const addListener = () => {
    for (let i = 0; i < gamePageAnchors.length; i++) {
        gamePageAnchors[i].addEventListener("click", onChangeGame);
    }
};
const removeListener = () => {
    for (let i = 0; i < gamePageAnchors.length; i++) {
        gamePageAnchors[i].removeEventListener("click", onChangeGame);
    }
};
const setChangeGame = () => {
    gamePageAnchors = document.querySelectorAll(".game-page-anchor");
    addListener();
    console.log(gamePageAnchors);
};
export default setChangeGame;
