// Функція для генерації випадкового кольору у форматі hex
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Отримання елементів з DOM
const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// Додавання обробників подій на кнопки
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyButton.addEventListener("click", destroyBoxes);

// Функція для створення коробок
function createBoxes(amount) {
  destroyBoxes(); // Очищення попередніх елементів

  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}

// Функція для очищення коробок
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
