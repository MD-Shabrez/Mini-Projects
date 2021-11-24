const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

function resetActive(cards) {
    for (card of cards) {
        card.classList.remove("active");
    }
}

const expandCard = (event) => {
    resetActive(cards);
    if (event.target.className == "card") {
        event.target.classList.add("active");
        console.log("Size Increased");
    }
};

cardContainer.addEventListener("click", expandCard);
