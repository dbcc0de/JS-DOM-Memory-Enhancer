"use strict";

const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");
const losePopup = document.querySelector(".lose-popup");
const winPopup = document.querySelector(".win-popup");
const popupContainer = document.querySelector(".popup-container");
const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".card");
const timerCountDown = document.querySelector("#count-down");
const endTime = 0;
let startSecs = 46;
let startMins = 0;
let totalTime = startMins * 60 + startSecs;
const cardArray = [
  {
    color: "red",
    image: "assets/goku.png",
  },
  {
    color: "green",
    image: "assets/vegeta.webp",
  },
  {
    color: "yellow",
    image: "assets/piccolo.webp",
  },
  {
    color: "orange",
    image: "assets/krillin.webp",
  },
  {
    color: "purple",
    image: "assets/buu.webp",
  },
  {
    color: "pink",
    image: "assets/frieza.webp",
  },
];
const doubleCardArray = cardArray.concat(cardArray);
let clickedCards = [];
let matchCount = 0;

// start Button
startButton.addEventListener("click", (e) => {
  startButton.classList.add("hidden");
  createBoardFunction();
  const timerFunction = setInterval(() => {
    if (totalTime === endTime) {
      clearInterval(timerFunction);
      popupContainer.classList.remove("popup-container");
      winPopup.classList.add("hidden");
    } else {
      totalTime--;
      timerCountDown.innerText = totalTime;
    }
  }, 1000);
});

// reset button
resetButton.addEventListener("click", (e) => {
  startButton.classList.remove("hidden");
  totalTime = 46;
  matchCount = 0;
  if (!cardContainer.firstChild) {
    createBoardFunction();
  } else {
    cardContainer.removeChild(cardContainer.firstChild);
    createBoardFunction();
  }
});

// Creats and Resets Board
const createBoardFunction = () => {
  const randomCardArray = doubleCardArray.sort((a, b) => 0.5 - Math.random());
  cardContainer.innerHTML = "";
  randomCardArray.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");
    const innerCard = document.createElement("div");
    innerCard.classList.add("inner-card");
    const cardFront = document.createElement("div");
    const frontImage = document.createElement("img");
    frontImage.setAttribute("src", "assets/dbztheme.jpg");
    cardFront.append(frontImage);
    cardFront.classList.add("front");
    const backImage = document.createElement("img");
    const cardBack = document.createElement("div");
    backImage.setAttribute("src", item.image);
    cardBack.append(backImage);
    cardBack.classList.add("back");
    innerCard.append(cardFront, cardBack);
    card.append(innerCard);
    cardContainer.append(card);
  });
};

// flip, match, and hide function on click
cardContainer.addEventListener("click", (e) => {
  console.dir(e.target);
  if (
    e.target.parentElement.classList.contains("front") &&
    clickedCards.length < 2
  ) {
    e.target.parentNode.parentNode.classList.add("flip-card");
    clickedCards.push(e.target.parentNode.parentNode.parentNode);
    if (clickedCards.length === 2) {
      if (
        clickedCards[0].getAttribute("src") ===
        clickedCards[1].getAttribute("src")
      ) {
        setTimeout(() => {
          clickedCards[0].childNodes[0].classList.add("hidden");
          clickedCards[1].childNodes[0].classList.add("hidden");
          clickedCards = [];
          matchCount++;
          if (matchCount === 6 && totalTime > 0) {
            losePopup.classList.add("hidden");
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
