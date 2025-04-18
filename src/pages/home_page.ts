const homePage = () => {
    return /*html*/`
        <div class="main-container">
            <section id="home" class="home">
                <div class="home-main">
                    <div class="home-star">
                        <svg
                            width="27"
                            height="27"
                            viewBox="0 0 27 27"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                filter="url(#strong-inner)"
                                d="M10.6468 2.78115C11.5449 0.0172148 15.4551 0.0172195 16.3532 2.78115L17.429 6.0922C17.8306 7.32827 18.9825 8.16515 20.2822 8.16515H23.7636C26.6698 8.16515 27.8781 11.884 25.527 13.5922L22.7104 15.6385C21.659 16.4025 21.219 17.7566 21.6206 18.9926L22.6964 22.3037C23.5945 25.0676 20.431 27.366 18.0799 25.6578L15.2634 23.6115C14.2119 22.8475 12.7881 22.8475 11.7366 23.6115L8.92009 25.6578C6.56895 27.366 3.40551 25.0676 4.30357 22.3037L5.3794 18.9926C5.78102 17.7566 5.34105 16.4025 4.28958 15.6385L1.47303 13.5922C-0.878109 11.884 0.330221 8.16515 3.23639 8.16515H6.71784C8.01752 8.16515 9.16938 7.32827 9.571 6.0922L10.6468 2.78115Z"
                                fill="#C9CCBE"
                            />
                            <defs>
                                <filter id="strong-inner" y="-0.2">
                                    <feFlood flood-color="#00000040" />
                                    <feComposite
                                        operator="out"
                                        in2="SourceGraphic"
                                    />
                                    operator="dilate" radius="1" />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feComposite
                                        operator="atop"
                                        in2="SourceGraphic"
                                    />
                                </filter>
                            </defs>
                        </svg>
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
                    <li>
                        <a class="game-page-anchor" data-game="NumbrGuesser" href="#">
                            <img
                                class="game-img"
                                src="./src/assets/images/pixel_art_island.png"
                                alt="pixel art image of an island"
                            />
                            <h3 class="game-title">NumbrGuesser</h3>
                            <p class="game-desc">
                                guess the number between a range
                            </p>
                        </a>
                    </li>
                    <li>
                        <a data-game="RockPaper" href="#">
                            <img
                                class="game-img"
                                src="./src/assets/images/pixel_art_cave.png"
                                alt="pixel art image of a cave"
                            />
                            <h3 class="game-title">RockPaper</h3>
                            <p class="game-desc">
                                play rock paper scissors with computer
                            </p>
                        </a>
                    </li>

                    <li>
                        <a data-game="Clicker" href="#">
                            <img
                                class="game-img"
                                src="./src/assets/images/pixel_art_island.png"
                                alt="pixel art image of an island"
                            />
                            <h3 class="game-title">Clicker</h3>
                            <p class="game-desc">
                                click as fast as you can
                            </p>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    `;
};

export default homePage;