import addNavbarToggle from "./src/features/navbar.js";
import navbar from "./src/components/navbar/navbar.js";
import homePage from "./src/pages/home-page.js"

const root: Element = document.querySelector("#root")!;

root.insertAdjacentHTML("beforebegin", navbar());
root.innerHTML = homePage();
addNavbarToggle();