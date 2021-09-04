import { navHomeContent, mainHomeContent } from "./home";
import { navMenuContent, mainMenuContent } from "./menu";
import { navContactContent, mainContactContent } from "./contact";
const body = document.getElementsByTagName("body")[0];
const nav = document.createElement("nav");
const main = document.createElement("main");
const footer = document.createElement("footer");

footer.innerHTML = `<p>&copy; 2021</p>`;
body.prepend(footer);
body.prepend(main);
body.prepend(nav);

run("home");

function run(what) {
  if (what === "home") {
    nav.innerHTML = navHomeContent;
    main.innerHTML = mainHomeContent;
  } else if (what === "menu") {
    nav.innerHTML = navMenuContent;
    main.innerHTML = mainMenuContent;
  } else if (what === "contact") {
    nav.innerHTML = navContactContent;
    main.innerHTML = mainContactContent;
  }
  handleLinks();
}


function handleLinks() {
  const homeLink = document.querySelector("#home");
  const menuLink = document.querySelector("#menu");
  const contactLink = document.querySelector("#contact");
  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    run("home");
  });
  menuLink.addEventListener("click", function (e) {
    e.preventDefault();
    run("menu");
  });
  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    run("contact");
  });
}


