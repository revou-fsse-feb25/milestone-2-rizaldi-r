export const gameDataList = [
    {
        gameTitle: "NumbrGuesser",
        gamePathFile: "./src/games/numbr-guesser/numbr-guesser.html",
        gameDescription: "guess the number between a range",
        gameIstruction: `
        <li>The computer randomly selects a number between a range you input.</li>
        <li>try to guess the number.</li>
        <li>The game provides hints: “Too high” or “Too low.”</li>
        <li>The game will end when you guess the righ number or the number of attempt has been reached.</li>`,
    },
    {
        gameTitle: "RockPaper",
        gameDescription: "play rock paper scissors with computer",
        gamePathFile: "./src/games/rock-paper/rock-paper.html",
        gameIstruction: `
        <li>The player chooses Rock, Paper, or Scissors.</li>
        <li>The computer will also randomly choose one of these three options.</li>
        <li>The game determines the winner based on classic rules.</li>
        <li>Whoever get wins three rounds wins the entire game.</li>`,
    },
    {
        gameTitle: "Clicker",
        gameDescription: "click as fast as you can",
        gamePathFile: "./src/games/clicker/clicker.html",
        gameIstruction: `
        <li>Every time you click, your score increases.</li>
        <li>Do your best to score as many points as possible before the time is up.</li>
        <li>If you achieve a high score, you'll be prompted to enter your name. Your name and score will be displayed at the top of the high score list.`,
    },
    {
        gameTitle: "Clicker 2",
        gameDescription: "under construction",
        gamePathFile: "./src/games/clicker/clicker.html",
        gameIstruction: `
        <li>Every time you click, your score increases.</li>
        <li>Do your best to score as many points as possible before the time is up.</li>
        <li>If you achieve a high score, you'll be prompted to enter your name. Your name and score will be displayed at the top of the high score list.`,
    },
];
