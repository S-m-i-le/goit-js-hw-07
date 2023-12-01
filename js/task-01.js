const allCategories = document.querySelectorAll(".item");
console.log("Number of categories:", allCategories.length);

allCategories.forEach((element) => {
  const h2 = element.querySelector("h2").textContent;
  const Elements = element.querySelectorAll("li").length;
  console.log(`Category: ${h2}`);
  console.log(`Elements: ${Elements}`);
});
