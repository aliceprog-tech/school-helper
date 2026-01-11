function register() {
  const name = document.getElementById("name").value;
  const userClass = document.getElementById("class").value;

  localStorage.setItem(
    "user",
    JSON.stringify({ name, userClass })
  );

  alert("Данные сохранены!");
}
