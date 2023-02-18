const $ = query => document.querySelector(query);
const array = [0, 0, 0];
let intervalId;

const displayTime = (timeUnit, i) => {
    if (array[i] < 9) {
        timeUnit.textContent = "0" + ++array[i];
    } else {
        timeUnit.textContent = ++array[i];
    }
}
const timer = () => {
    displayTime($("#hs"), 0)
    if (array[0] === 100) {
        $("#hs").textContent = "00";
        array[0] = 0;
        displayTime($("#s"), 1);
    }
    if (array[1] === 60) {
        $("#s").textContent = "00";
        array[1] = 0;
        displayTime($("#m"), 2);
    }
}
$("#buttons").addEventListener("click", (event) => {
    if (event.target.id === "start") {
        clearInterval(intervalId);
        intervalId = setInterval(timer, 10);
    } else if (event.target.id === "stop") {
        clearInterval(intervalId);
    } else if (event.target.id === "reset") {
        array[0] = array[1] = array[2] = 0;
        $("#hs").textContent = $("#s").textContent = $("#m").textContent = "00";
    }
});