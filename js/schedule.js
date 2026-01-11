const data = {
  mon: ["Математика", "Русский", "История"],
  tue: ["Английский", "Физика", "Информатика"]
};

function showDay(day) {
  lessons.innerHTML = "";
  data[day].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lessons.appendChild(li);
  });
}
