const hs = document.querySelector("#hs");
const s = document.querySelector("#s");
const m = document.querySelector("#m");
const startW = document.querySelector("#start");
const stopW = document.querySelector("#stop");
const resetW = document.querySelector("#reset");

let intervalId;
const array = [0, 0, 0];

const displayTime = (timeUnit, i) => {
    if (array[i] < 9) {
        timeUnit.textContent = "0" + ++array[i];
    } else {
        timeUnit.textContent = ++array[i];
    }
}
const timer = () => {
    displayTime(hs, 0)
    if (array[0] === 100) {
        hs.textContent = "00";
        array[0] = 0;
        displayTime(s, 1)
    }
    if (array[1] === 60) {
        s.textContent = "00";
        array[1] = 0;
        displayTime(m, 2)
    }
}
const startTimer = () => {
    clearInterval(intervalId);
    intervalId = setInterval(timer, 10);
}

startW.addEventListener("click", startTimer);
stopW.addEventListener("click", () => clearInterval(intervalId));
resetW.addEventListener("click", () => {
    array[0] = array[1] = array[2] = 0; 
    hs.textContent = s.textContent = m.textContent = "00";
});