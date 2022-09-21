const hSecond = document.querySelector("#hs");
const seconds = document.querySelector("#s");
const minutes = document.querySelector("#m");
const startW = document.querySelector("#start");
const stopW = document.querySelector("#stop");
const resetW = document.querySelector("#reset");

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
            hs = 0;
            if (s < 9) {
                seconds.textContent = "0" + ++s;
            } else {
                seconds.textContent = ++s;
            }
        }
        if (s === 60) {
            seconds.textContent = "00";
            s = 0;
            if (m < 9) {
                minutes.textContent = "0" + ++m;
            } else {
                minutes.textContent = ++m;
            }
        }
    }
    clearInterval(intervalId);
    intervalId = setInterval(timer, 10);
}

startW.addEventListener("click", startTimer);
stopW.addEventListener("click", () => clearInterval(intervalId));
resetW.addEventListener("click", () => {
    hs = s = m = 0; 
    hSecond.textContent = seconds.textContent = minutes.textContent = "00";
});