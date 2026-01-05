let pressedCount = 0;
let triggeredCount = 0;

const button = document.getElementById("btn");
const pressedText = document.getElementById("pressed");
const triggeredText = document.getElementById("triggered");

function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

const debouncedFunction = debounce(() => {
    triggeredCount++;
    triggeredText.innerText = "Triggered: " + triggeredCount;
}, 800);

button.addEventListener("click", () => {
    pressedCount++;
    pressedText.innerText = "Button Pressed: " + pressedCount;
    debouncedFunction();
});