const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
  }
});

function createBoxes(amount) {
  let w = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    w += 10 * i;
    div.style.width = `${w}px`;
    div.style.height = `${w}px`;
    boxes.appendChild(div);
  }
}

destroy.addEventListener("click", () => {
  destroyBoxes();
});
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
