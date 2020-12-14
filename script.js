
const startTime = 25;
var sec = 0; // global variable
var min = startTime;
var interval;
const counterValue = 5;

let secondElement = document.getElementById("second");
let minuteElement = document.getElementById("minute");

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let incButton = document.getElementById("inc");
let decButton = document.getElementById("dec");

let formatInDoubleDigit = function (digit) {
    return digit < 10 ? "0" + digit : digit;
};

function timeIt() {
    sec--;
    if (sec <= 0) {
        sec = 59;
        min--;
    }
    secondElement.innerHTML = formatInDoubleDigit(sec);
    minuteElement.innerHTML = formatInDoubleDigit(min);
}

startButton.addEventListener("click", function () {
    interval = setInterval(timeIt, 1000);
});

stopButton.addEventListener("click", function () {
    clearInterval(interval);
});

resetButton.addEventListener("click", function () {
    clearInterval(interval)
    secondElement.innerHTML = formatInDoubleDigit(0);
    minuteElement.innerHTML = formatInDoubleDigit(startTime);
    sec = 0;
    min = startTime;
});

incButton.addEventListener("click", function () {
    min += counterValue;
    sec = 0;
});

decButton.addEventListener("click", function () {
    min -= counterValue;
    sec = 0;
});


