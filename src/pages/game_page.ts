const gamePage = (dataObj: any) => {
    return /*HTML*/ `<section id="game-sect" class="game-sect">
        <!-- TODO: dynamic naming -->
        <h2 id="game-sect-title" class="game-sect-title">
            <span>${dataObj.gameTitle}</span>
        </h2>
        <!--<div id="game-sect-game" class="game-sect-game"></div>-->
        <iframe class="game-sect-game" src="${dataObj.gamePathFile}" frameborder="0"></iframe> 
        <button class="game-sect-button btn">
            <a class="home-page-anchor" href="#">Back to Home</a>
        </button>
    </section>

    <section id="instruct" class="instruct">
        <h2 class="instruct-title title-sub">instruction</h2>
        <!-- TODO: dynamic naming -->
        <ul id="instruct-list" class="instruct-list">
            ${dataObj.gameIstruction}
        </ul>
    </section>`;
};

export default gamePage;
