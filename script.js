"use strict";

const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");
const losePopup = document.querySelector(".lose-popup");
const winPopup = document.querySelector(".win-popup");
const popupContainer = document.querySelector(".popup-container");
startButton.addEventListener("click", (e) => {
  startButton.classList.add("hidden");
  const timerFunction = setInterval(() => {
    if (totalTime === endTime) {
      clearInterval(timerFunction);
      popupContainer.classList.remove("popup-container");
      winPopup.classList.add("hidden");
    } else {
      totalTime--;
      timerCountDown.innerText = totalTime;
      console.log(totalTime);
    }
  }, 1000);
});

resetButton.addEventListener("click", (e) => {
  startButton.classList.remove("hidden");
  // totalTime = 46;
});

const timerCountDown = document.querySelector("#count-down");
const endTime = 0;
let startSecs = 46;
// scale up with minutes and seconds and convert
let startMins = 0;
let totalTime = startMins * 60 + startSecs;
// const timerFunction = setInterval(() => {
//   if (totalTime === endTime) {
//     clearInterval(timerFunction);
//   } else {
//     totalTime--;
//     timerCountDown.innerText = totalTime;
//     console.log(totalTime);
//   }
// }, 1000);

const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".card");

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
  cardBack.style.backgroundColor = item.color;
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

// have to add else if statement for if startTime or timer variable === 0 --> alert you lose (or unhide a you lose div)

// array of values/images that have properties to compare
// empty array to push "clicked"
