const navbar = document.querySelector("nav");
const openMenu = document.querySelector("#menu-btn");
const closeMenu = document.querySelector("#menu-close");

openMenu.addEventListener("click", () => {
    navbar.classList.add("open");
})

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("open");
})