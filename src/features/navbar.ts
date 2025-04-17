const elementNavbarBurger: HTMLElement =
    document.querySelector("#navbar-burger")!;
const elementNavbarMenu: HTMLElement = 
    document.querySelector("#navbar-menu-mobile")!;
const elementNavbarBlur: HTMLElement = 
    document.querySelector("#navbar-blur")!;

const elementNavbarTogglesList: NodeListOf<Element> = 
    document.querySelectorAll("#navbar-toggle-list")!;
const elementNavbarLinks: NodeListOf<Element> =
    document.querySelectorAll("#navbar-menu-mobile .navbar-menu-link")!;
const elementNavbarSubMenu: NodeListOf<Element> =
    document.querySelectorAll("#navbar-sub-menu")!;

interface ToggleState {
    isMenuActive: boolean;
    isSubMenuActive: boolean;
}

const toggleState: ToggleState = {
    isMenuActive: false,
    isSubMenuActive: false,
};

const addNavbarToggle = (): void => {
    console.log(elementNavbarSubMenu);

    elementNavbarBurger.addEventListener("click", (): void => {
        toggleMenu(toggleState, "isMenuActive");
    });

    elementNavbarBlur.addEventListener("click", (): void => {
        toggleMenu(toggleState, "isMenuActive");
    });

    for (let i = 0; i < elementNavbarLinks.length; i++) {
        elementNavbarLinks[i].addEventListener("click", (): void => {
            toggleMenu(toggleState, "isMenuActive");
        });
    }

    for (let i = 0; i < elementNavbarTogglesList.length; i++) {
        elementNavbarTogglesList[i].addEventListener("click", (): void => {
            toggleSubMenu(toggleState, "isSubMenuActive")
        });
    }
};

// TODO: make this one function that accept an arrray of element
const toggleMenu = (toggleState: ToggleState, key : keyof ToggleState): void => {
    toggleState[key] = !toggleState[key];
    toggleDisplay(elementNavbarMenu, toggleState[key]);
    toggleDisplay(elementNavbarBlur, toggleState[key]);
};

const toggleSubMenu = (toggleState: ToggleState, key : keyof ToggleState): void => {
    toggleState[key] = !toggleState[key];
    for (const element of elementNavbarSubMenu) {
        toggleDisplay(element as HTMLElement, toggleState[key]);
    }
};

const toggleDisplay = (
    htmlElement: HTMLElement,
    isShown: boolean = true
): void => {
    if (!isShown) htmlElement.style.display = "none";
    else htmlElement.style.display = "initial";
};

export default addNavbarToggle;
