const gamePage = () => {
    return /*HTML*/ `<section id="game-sect" class="game-sect">
        <!-- TODO: dynamic naming -->
        <h2 id="game-sect-title" class="game-sect-title">
            <span>NumbrGuesser</span>
        </h2>
        <div id="game-sect-game" class="game-sect-game"></div>
        <!-- <iframe src="" frameborder="0"></iframe> -->
        <button class="game-sect-button btn">
            <a class="home-page-anchor" href="#">Back to Home</a>
        </button>
    </section>

    <section id="instruct" class="instruct">
        <h2 class="instruct-title title-sub">instruction</h2>
        <!-- TODO: dynamic naming -->
        <ul id="instruct-list" class="instruct-list">
            <li>
                The computer randomly selects a number between a range
                you input.
            </li>
            <li>try to guess the number.</li>
            <li>The game provides hints: “Too high” or “Too low.”</li>
            <li>
                The game will end when you guess the righ number or the
                number of attempt has been reached.
            </li>
        </ul>
    </section>`;
};

export default gamePage;
