"use strict";

const lookForCategories = document.querySelector("#categories");
const allElements = lookForCategories.querySelectorAll(".item");
console.log(`Number of categories:${allElements.length}`);
allElements.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  console.log(`Category:${title}`);
  const quantityElements = element.querySelectorAll("ul li");
  console.log(`Elements:${quantityElements.length}`);
});
