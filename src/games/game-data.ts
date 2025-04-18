interface GameDataList {
    gameTitle: string;
    gamePathFile: string;
    gameIstruction: string;
}

export const gameDataList: Array<GameDataList> = [
    {
        gameTitle: "NumbrGuesser",
        gamePathFile: "./src/games/numbr-guesser/numbr-guesser.html",
        gameIstruction: `
        <li>The computer randomly selects a number between a rangeyou input.</li>
        <li>try to guess the number.</li>
        <li>The game provides hints: “Too high” or “Too low.”</li>
        <li>The game will end when you guess the righ number or the number of attempt has been reached.</li>`,
    },
    {
        gameTitle: "RockPaper",
        gamePathFile: "./src/games/rock-paper/rock-paper.html",
        gameIstruction: `
        <li>The player chooses Rock, Paper, or Scissors.</li>
        <li>The computer randomly selects one as well.</li>
        <li>The game determines the winner based on classic rules.</li>`,
    },
    {
        gameTitle: "Clicker",
        gamePathFile: "./src/games/clicker/clicker.html",
        gameIstruction: `
        <li>Every time the player clicks it, the score increases.</li>
        <li>After a certain time limit, the game ends and displays the final score.</li>`,
    },
];
