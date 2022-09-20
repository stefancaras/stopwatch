const stopwatch = document.querySelector("#stopwatch");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let i = 0;
setInterval(() => {
    stopwatch.textContent = i++;
}, 1000);