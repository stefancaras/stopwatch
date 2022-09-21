const stopwatch = document.querySelector("#stopwatch");
const hs = document.querySelector("#hs");
const s = document.querySelector("#s");
const m = document.querySelector("#m");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let intervalId;

let i = 0;
let j = 0;
const startTimer = () => {
    const timer = () => {
        if (i < 9) {
            s.textContent = "0" + ++i;
        } else {
            s.textContent = ++i;
        }
        if (i === 60) {
            s.textContent = "00";
            if (j < 9) {
                m.textContent = "0" + ++j;
            } else {
                m.textContent = ++j;
            }
            i = 0;
        }
    }
    intervalId = setInterval(timer, 1000);
}

start.addEventListener("click", startTimer);

const stopTimer = () => {
    clearInterval(intervalId);
}

stop.addEventListener("click", stopTimer);