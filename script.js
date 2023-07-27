"use strict";

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
  innerCard.append(cardFront, cardBack);
  card.append(innerCard);
  cardContainer.append(card);
});

// if using images create asset folder
// reference the assets in the array
// look up shuffle methods for JS, (fisher yates?)
const clickedCards = [];
cardContainer.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.classList.contains("front")) {
    e.target.parentNode.classList.add("flip-card");
    e.target.classList.add("clicked");
    clickedCards.push(e.target.parentNode);
    if (clickedCards.length === 2) {
      if (
        clickedCards[0].getAttribute("data-color") ===
        clickedCards[1].getAttribute("data-color")
      ) {
      } else {
      }
    }
    // wait x amount, let user click next card ... wait. then flip
  }
});

// need only two cards shown at once, if they are match => (hide)
// if matched, hide, if not flip them back
// with class values? ids? how to distinguish cards from one another
// array of values/images that have properties to compare
// empty array to push "clicked"

// 12 images (really 6) in array/object
// randomized at various locations 0-11 (in the for loop?)
// class="0" if (card.classLis.contains("0") )
// const pair1 = card.classList.contains("0", "1")
// class="1"
// if (cardValue )
// parseInt(#classPair0);

// class="pair0" if (cardValue <= )
// class="pair0" if (cardValue <= 1)
// class="pair0" if (cardValue <= 1)
// class="pair0" if (cardValue <= 1)
// class="pair0" if (cardValue <= 1)
