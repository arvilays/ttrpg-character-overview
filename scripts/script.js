const characterLevel = document.querySelector(".character-level")
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const MIN_LEVEL = 1;
const MAX_LEVEL = 20;

arrowLeft.addEventListener("click", () => {
    if (Number(characterLevel.textContent) > MIN_LEVEL) {
        characterLevel.textContent = Number(characterLevel.textContent) - 1;
    }
});

arrowRight.addEventListener("click", () => {
    if (Number(characterLevel.textContent) < MAX_LEVEL) {
        characterLevel.textContent = Number(characterLevel.textContent) + 1;
    }
});