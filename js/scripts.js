const minutesE1 = document.querySelector("#minutes")
const secondsE1 = document.querySelector("#seconds")
const millisecondsE1 = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesE1.textContent = formatTime(minutes);
            secondsE1.textContent = formatTime(seconds);
            millisecondsE1.textContent = formatMilliseconds(milliseconds);
        }
    }, 10);

    startBtn.style.display = 'none';
    pauseBtn.style.display = "inline-block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "inline-block";
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "inline-block";
    resumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isPaused = false;
    minutesE1.innerHTML = "00";
    secondsE1.innerHTML = "00";
    millisecondsE1.innerHTML = "000";
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}