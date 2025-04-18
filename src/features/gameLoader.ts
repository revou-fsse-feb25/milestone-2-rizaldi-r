let gamePageAnchors: NodeListOf<Element> =
    document.querySelectorAll(".game-page-anchor");

const root: Element = document.querySelector("#root")!;

const replaceElement = (elementString: string): void => {
    if (root) {
        root.insertAdjacentHTML("beforeend", elementString);
    }
};

const onChangeGame = (event: Event) => {
    removeListener();
    setChangeGame();
};

const addListener = () => {
    for (let i = 0; i < gamePageAnchors.length; i++) {
        gamePageAnchors[i].addEventListener("click", onChangeGame);
    }
};

const removeListener = (): void => {
    for (let i = 0; i < gamePageAnchors.length; i++) {
        gamePageAnchors[i].removeEventListener("click", onChangeGame);
    }
};

const setChangeGame = (): void => {
    gamePageAnchors = document.querySelectorAll(".game-page-anchor");
    addListener();
    console.log(gamePageAnchors);
};

export default setChangeGame;
