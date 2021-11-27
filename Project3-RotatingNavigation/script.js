const rotatingContainer = document.querySelector(".rotating-container");
const crossNav = document.querySelector(".fa-times");
const hamNav = document.querySelector(".fa-bars");
const homeNav = document.querySelector(".home");
const aboutNav = document.querySelector(".about");
const contactNav = document.querySelector(".contact");
const toggler = document.querySelector(".toggler");

const rotateAnimation = () => {
    hamNav.classList.toggle("none");
    crossNav.classList.toggle("none");
    homeNav.classList.toggle("translate");
    aboutNav.classList.toggle("translate");
    contactNav.classList.toggle("translate");
    rotatingContainer.classList.toggle("rotate");
};

toggler.addEventListener("click", rotateAnimation);
