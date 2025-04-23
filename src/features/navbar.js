let elementNavbarBurger;
let elementNavbarMenu;
let elementNavbarBlur;
let elementsNavbarTogglesList;
let elementsNavbarLinks;
let elementsNavbarSubMenu;
const toggleState = {
    isMenuActive: false,
    isSubMenuActive: false,
};
const addNavbarToggle = () => {
    elementNavbarBurger = document.querySelector("#navbar-burger");
    elementNavbarMenu = document.querySelector("#navbar-menu-mobile");
    elementNavbarBlur = document.querySelector("#navbar-blur");
    elementsNavbarTogglesList = document.querySelectorAll("#navbar-toggle-list");
    elementsNavbarLinks = document.querySelectorAll("#navbar-menu-mobile .navbar-menu-link");
    elementsNavbarSubMenu = document.querySelectorAll("#navbar-sub-menu");
    elementNavbarBurger.addEventListener("click", () => {
        toggleMenu(toggleState, "isMenuActive");
    });
    elementNavbarBlur.addEventListener("click", () => {
        toggleMenu(toggleState, "isMenuActive");
    });
    for (let i = 0; i < elementsNavbarLinks.length; i++) {
        elementsNavbarLinks[i].addEventListener("click", () => {
            toggleMenu(toggleState, "isMenuActive");
        });
    }
    for (let i = 0; i < elementsNavbarTogglesList.length; i++) {
        elementsNavbarTogglesList[i].addEventListener("click", () => {
            toggleSubMenu(toggleState, "isSubMenuActive");
        });
    }
};
// TODO: make this one function that accept an arrray of element
const toggleMenu = (toggleState, key) => {
    toggleState[key] = !toggleState[key];
    toggleDisplay(elementNavbarMenu, toggleState[key]);
    toggleDisplay(elementNavbarBlur, toggleState[key]);
};
const toggleSubMenu = (toggleState, key) => {
    toggleState[key] = !toggleState[key];
    for (const element of elementsNavbarSubMenu) {
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
