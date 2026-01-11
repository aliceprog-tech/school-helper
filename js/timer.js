let seconds = 1500;
let interval;

function start() {
  if (interval) return;

  interval = setInterval(() => {
    seconds--;
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    time.textContent = ${min}:${sec < 10 ? "0" : ""}${sec};

    if (seconds <= 0) clearInterval(interval);
  }, 1000);
}
