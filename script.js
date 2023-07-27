"use strict";

const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".card");
for (let i = 0; i < 12; i++) {
  const card = document.createElement("li");
  card.classList.add("card");
  const cardFlipInner = document.createElement("div");
  cardFlipInner.classList.add("flipCard");
  const cardFront = document.createElement("div");
  cardFront.classList.add("front");
  const cardBack = document.createElement("div");
  cardBack.classList.add("back");
  cardFlipInner.append(cardFront);
  cardFlipInner.append(cardBack);
  card.append(cardFlipInner);
  cardContainer.append(card);
  card.classList.add("back");
}

cardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("card")) {
    e.target.classList.toggle("flipCard");
    e.target.classList.toggle("front");
    e.target.classList.toggle("back");
  }
});
