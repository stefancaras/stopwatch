const hSecond = document.querySelector("#hs");
const seconds = document.querySelector("#s");
const minutes = document.querySelector("#m");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let intervalId;

let hs = 0;
let s = 0;
let m = 0;

const startTimer = () => {
    const timer = () => {
        if (hs < 9) {
            hSecond.textContent = "0" + ++hs;
        } else {
            hSecond.textContent = ++hs;
        }
        if (hs === 100) {
            hSecond.textContent = "00";
            if (s < 9) {
                seconds.textContent = "0" + ++s;
            } else {
                seconds.textContent = ++s;
            }
            hs = 0;
        }
        if (s === 60) {
            seconds.textContent = "00";
            if (m < 9) {
                minutes.textContent = "0" + ++m;
            } else {
                minutes.textContent = ++m;
            }
            s = 0;
        }
    }
    intervalId = setInterval(timer, 10);
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", () => {
    clearInterval(intervalId);
});
reset.addEventListener("click", () => {
    hs = s = m = 0; 
    hSecond.textContent = seconds.textContent = minutes.textContent = "00";
});