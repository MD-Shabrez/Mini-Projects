const body = document.querySelector(".body");
const count = document.querySelector(".count");
let blurCount = 100;

const loading = () => {
    if (blurCount < 0) {
        count.classList.remove("loading");
        body.classList.remove("loading");
        clearInterval(counting);
    } else {
        body.style.filter = `blur(${blurCount}px)`;
        count.style.opacity = `${blurCount / 100}`;
        count.textContent = `${blurCount}%`;
        blurCount--;
    }
};

const counting = setInterval(loading, 20);
