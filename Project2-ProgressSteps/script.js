const steps = document.querySelectorAll(".step");
const buttons = document.querySelectorAll("button");
const stepLine = document.querySelector(".step-line");
let stepCount = 1;

const stepCircleUpdate = () => {
    steps.forEach((element) => {
        element.classList.remove("primary-border");
    });

    for (let i = 0; i < stepCount; i++) {
        steps[i].classList.add("primary-border");
    }
};

const stepLineUpdate = () => {
    stepLine.style.width = `${(stepCount - 1) * 33.3333}%`;
};

const stepUpdate = (event) => {
    const targetElement = event.target.className;
    if (targetElement.includes("next") && stepCount <= 3) {
        stepCount++;
    } else if (targetElement.includes("prev") && stepCount >= 2) {
        stepCount--;
    }
    stepCircleUpdate();
    stepLineUpdate();
    if (stepCount == 4) {
        buttons[0].classList.add("primary-background");
        buttons[1].classList.remove("primary-background");
    } else if (stepCount == 1) {
        buttons[1].classList.add("primary-background");
        buttons[0].classList.remove("primary-background");
    }
};

for (button of buttons) {
    button.addEventListener("click", stepUpdate);
}
