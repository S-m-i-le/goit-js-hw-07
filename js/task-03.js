const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", () => {
  let name = inputName.value.trim();
  if (name === "" || name === " " || name === "?" || name === "!") {
    outputName.textContent = "Anonymous";
  } else outputName.textContent = name;
});
