const elementNavbarBurger = document.querySelector("#navbar-burger");
const elementNavbarMenu = document.querySelector("#navbar-menu-mobile");
const elementNavbarBlur = document.querySelector("#navbar-blur");
const elementNavbarTogglesList = document.querySelectorAll("#navbar-toggle-list");
const elementNavbarLinks = document.querySelectorAll("#navbar-menu-mobile .navbar-menu-link");
const elementNavbarSubMenu = document.querySelectorAll("#navbar-sub-menu");
const toggleState = {
    isMenuActive: false,
    isSubMenuActive: false,
};
const addNavbarToggle = () => {
    console.log(elementNavbarSubMenu);
    elementNavbarBurger.addEventListener("click", () => {
        toggleMenu(toggleState, "isMenuActive");
    });
    elementNavbarBlur.addEventListener("click", () => {
        toggleMenu(toggleState, "isMenuActive");
    });
    for (let i = 0; i < elementNavbarLinks.length; i++) {
        elementNavbarLinks[i].addEventListener("click", () => {
            toggleMenu(toggleState, "isMenuActive");
        });
    }
    for (let i = 0; i < elementNavbarTogglesList.length; i++) {
        elementNavbarTogglesList[i].addEventListener("click", () => {
            console.log("test");
            toggleSubMenu(toggleState, "isSubMenuActive");
        });
    }
};
const toggleMenu = (toggleState, key) => {
    toggleState[key] = !toggleState[key];
    toggleDisplay(elementNavbarMenu, toggleState[key]);
    toggleDisplay(elementNavbarBlur, toggleState[key]);
};
const toggleSubMenu = (toggleState, key) => {
    toggleState[key] = !toggleState[key];
    for (const element of elementNavbarSubMenu) {
        toggleDisplay(element, toggleState[key]);
    }
};
const toggleDisplay = (htmlElement, isShown = true) => {
    if (!isShown)
        htmlElement.style.display = "none";
    else
        htmlElement.style.display = "initial";
};
export default addNavbarToggle;
