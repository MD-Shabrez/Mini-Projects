const searchLogo = document.querySelector(".hidden-search-container label");
const hiddenSearchContainer = document.querySelector(
    ".hidden-search-container"
);
const textField = document.querySelector(".hidden-search-container input");

const hiddenSearchToggle = () => {
    hiddenSearchContainer.classList.toggle("width-present");
    textField.classList.toggle("width-present");
};
searchLogo.addEventListener("click", hiddenSearchToggle);
