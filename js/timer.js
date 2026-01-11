let seconds = 1500;
let interval = null;

const timeEl = document.getElementById("time");

function updateTime() {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  timeEl.textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function start() {
  if (interval) return;

  interval = setInterval(() => {
    seconds--;
    updateTime();

    if (seconds <= 0) {
      clearInterval(interval);
      interval = null;
      alert("Время вышло!");
    }
  }, 1000);
}

function reset() {
  clearInterval(interval);
  interval = null;
  seconds = 1500;
  updateTime();
}
