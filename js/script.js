// разделы
function showSection(id, btn) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
}

// дз
const taskList = document.getElementById("taskList");

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${input.value}`;

    li.addEventListener("click", () => {
        li.style.transform = "translateX(100%)";
        li.style.opacity = "0";
        setTimeout(() => {
            li.remove();
            saveTasks();
        }, 300);
    });

    taskList.appendChild(li);
    saveTasks();
    input.value = "";
}

function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach(li => {
        tasks.push(li.textContent.replace("✔️ ", ""));
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${task}`;
        li.addEventListener("click", () => {
            li.style.transform = "translateX(100%)";
            li.style.opacity = "0";
            setTimeout(() => {
                li.remove();
                saveTasks();
            }, 300);
        });
        taskList.appendChild(li);
    });
}

loadTasks();

// таймер
let time = 1500;
let timer;

function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
        time--;
        updateTime();
        if (time <= 0) clearInterval(timer);
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    time = 1500;
    updateTime();
}

function updateTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("time").textContent =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// темы свитч
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️ Светлая тема" : "🌙 Тёмная тема";
});
