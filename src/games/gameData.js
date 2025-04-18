export const gameDataList = [
    {
        gameTitle: "NumbrGuesser",
        gamePathFile: "./src/games/numbr_guesser/index.html",
        gameIstruction: `
        <li>
            The computer randomly selects a number between a rangeyou input.
        </li>
        <li>try to guess the number.</li>
        <li>The game provides hints: “Too high” or “Too low.”</li>
        <li>
            The game will end when you guess the righ number or the number of attempt has been reached.
        </li>`,
    },
    {
        gameTitle: "RockPaper",
        gamePathFile: "./src/games/rock_paper/index.html",
        gameIstruction: `The player chooses Rock, Paper, or Scissors.
        The computer randomly selects one as well.
        The game determines the winner based on classic rules.`,
    },
    {
        gameTitle: "Clicker",
        gamePathFile: "./src/games/clicker/index.html",
        gameIstruction: `Every time the player clicks it, the score increases.
        After a certain time limit, the game ends and displays the final score.`,
    },
];
