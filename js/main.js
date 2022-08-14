const burgermenu = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar-links");
const buttons = document.querySelector(".btn")
burgermenu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});