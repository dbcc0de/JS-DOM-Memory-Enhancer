"use strict";

const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".card");
const popupContainer = document.querySelector(".popup-container");
const cardArray = [
  {
    color: "red",
    // image: "/img/relPath",
  },
  {
    color: "green",
  },
  {
    color: "yellow",
  },
  {
    color: "orange",
  },
  {
    color: "purple",
  },
  {
    color: "pink",
  },
];
const doubleCardArray = cardArray.concat(cardArray);
const randomCardArray = doubleCardArray.sort((a, b) => 0.5 - Math.random());
randomCardArray.forEach((item) => {
  const card = document.createElement("li");
  card.classList.add("card");
  card.setAttribute("data-color", item.color);
  console.log(card);
  const innerCard = document.createElement("div");
  innerCard.classList.add("inner-card");
  const cardFront = document.createElement("div");
  cardFront.classList.add("front");
  const cardBack = document.createElement("div");
  cardBack.classList.add("back");
  innerCard.append(cardFront, cardBack);
  card.append(innerCard);
  cardContainer.append(card);
});

// if using images create asset folder
// reference the assets in the array
// look up shuffle methods for JS, (fisher yates?)
let clickedCards = [];
let matchCount = 0;
cardContainer.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.classList.contains("front") && clickedCards.length < 2) {
    e.target.parentNode.classList.add("flip-card");
    clickedCards.push(e.target.parentNode.parentNode);
    if (clickedCards.length === 2) {
      if (
        clickedCards[0].getAttribute("data-color") ===
        clickedCards[1].getAttribute("data-color")
      ) {
        setTimeout(() => {
          clickedCards[0].childNodes[0].classList.add("hidden");
          clickedCards[1].childNodes[0].classList.add("hidden");
          clickedCards = [];
          matchCount++;
          if (matchCount === 6) {
            popupContainer.classList.remove("popup-container");
          }
        }, 1000);
      } else {
        setTimeout(() => {
          clickedCards[0].childNodes[0].classList.remove("flip-card");
          clickedCards[1].childNodes[0].classList.remove("flip-card");
          clickedCards = [];
        }, 1000);
      }
    }
  }
});

// array of values/images that have properties to compare
// empty array to push "clicked"
