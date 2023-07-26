"use strict";

const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".card");
for (let i = 0; i < 12; i++) {
  const card = document.createElement("li");
  card.classList.add("card", "back");
  cardContainer.append(card);
}

cardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("card")) {
    e.target.classList.toggle("flipCard");
    e.target.classList.toggle("front");
    console.log("I touched the butt");
  }
});
