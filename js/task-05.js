const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColor.addEventListener("click", backgroundcolor);

function backgroundcolor() {
  const colorNew = getRandomHexColor();
  document.body.style.backgroundColor = colorNew;
  color.textContent = colorNew;
  color.style.color = colorNew;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
