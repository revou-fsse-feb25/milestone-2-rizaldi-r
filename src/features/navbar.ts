let elementNavbarBurger: HTMLElement;
let elementNavbarMenu: HTMLElement;
let elementNavbarBlur: HTMLElement;

let elementsNavbarTogglesList: NodeListOf<Element>;
let elementsNavbarLinks: NodeListOf<Element>;
let elementsNavbarSubMenu: NodeListOf<Element>;

interface ToggleState {
    isMenuActive: boolean;
    isSubMenuActive: boolean;
}

const toggleState: ToggleState = {
    isMenuActive: false,
    isSubMenuActive: false,
};

const addNavbarToggle = (): void => {
    elementNavbarBurger = document.querySelector("#navbar-burger")!;
    elementNavbarMenu = document.querySelector("#navbar-menu-mobile")!;
    elementNavbarBlur = document.querySelector("#navbar-blur")!;

    elementsNavbarTogglesList = document.querySelectorAll("#navbar-toggle-list")!;
    elementsNavbarLinks = document.querySelectorAll("#navbar-menu-mobile .navbar-menu-link")!;
    elementsNavbarSubMenu = document.querySelectorAll("#navbar-sub-menu")!;

    elementNavbarBurger.addEventListener("click", (): void => {
        toggleMenu(toggleState, "isMenuActive");
    });

    elementNavbarBlur.addEventListener("click", (): void => {
        toggleMenu(toggleState, "isMenuActive");
    });

    for (let i = 0; i < elementsNavbarLinks.length; i++) {
        elementsNavbarLinks[i].addEventListener("click", (): void => {
            toggleMenu(toggleState, "isMenuActive");
        });
    }

    for (let i = 0; i < elementsNavbarTogglesList.length; i++) {
        elementsNavbarTogglesList[i].addEventListener("click", (): void => {
            toggleSubMenu(toggleState, "isSubMenuActive");
        });
    }
};

// TODO: make this one function that accept an arrray of element
const toggleMenu = (toggleState: ToggleState, key: keyof ToggleState): void => {
    toggleState[key] = !toggleState[key];
    toggleDisplay(elementNavbarMenu, toggleState[key]);
    toggleDisplay(elementNavbarBlur, toggleState[key]);
};

const toggleSubMenu = (toggleState: ToggleState, key: keyof ToggleState): void => {
    toggleState[key] = !toggleState[key];
    for (const element of elementsNavbarSubMenu) {
        toggleDisplay(element as HTMLElement, toggleState[key]);
    }
};

const toggleDisplay = (htmlElement: HTMLElement, isShown: boolean = true): void => {
    if (!isShown) htmlElement.style.display = "none";
    else htmlElement.style.display = "initial";
};

export default addNavbarToggle;
