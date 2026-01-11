console.log("Pomodoro JS загружен");
let studyTime = 25 * 60;   // 25 минут
let breakTime = 5 * 60;   // 5 минут

let seconds = studyTime;
let isStudy = true;
let interval = null;

const timeEl = document.getElementById("time");
const modeEl = document.getElementById("mode");

function updateTime() {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  timeEl.textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function startPomodoro() {
  if (interval) return;

  interval = setInterval(() => {
    seconds--;
    updateTime();

    if (seconds <= 0) {
      switchMode();
    }
  }, 1000);
}

function pausePomodoro() {
  clearInterval(interval);
  interval = null;
}

function resetPomodoro() {
  clearInterval(interval);
  interval = null;
  isStudy = true;
  seconds = studyTime;
  modeEl.textContent = "Учёба";
  updateTime();
}

function switchMode() {
  clearInterval(interval);
  interval = null;

  if (isStudy) {
    isStudy = false;
    seconds = breakTime;
    modeEl.textContent = "Перерыв ☕";
    alert("Время перерыва!");
  } else {
    isStudy = true;
    seconds = studyTime;
    modeEl.textContent = "Учёба 📘";
    alert("Пора учиться!");
  }

  updateTime();
}
