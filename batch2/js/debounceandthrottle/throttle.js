let pressedCount = 0;
let triggeredCount = 0;

const button = document.getElementById("btn");
const pressedText = document.getElementById("pressed");
const triggeredText = document.getElementById("triggered");

function throttle(func, delay) {
    let lastTime = 0;
    return function () {
        const currentTime = Date.now();
        console.log(currentTime)
        if (currentTime - lastTime >= delay) {
            lastTime = currentTime;

            func();
        }
    };
}

const throttledFunction = throttle(() => {
    triggeredCount++;
    triggeredText.innerText = "Triggered: " + triggeredCount;
}, 800);

button.addEventListener("click", () => {
    pressedCount++;
    pressedText.innerText = "Button Pressed: " + pressedCount;
    throttledFunction();
});