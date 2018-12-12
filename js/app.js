let counterPlayerOne = 0;
let counterPlayerTwo = 0;

// Deck setup and methods
//Classes
class Deck {
  constructor() {
    this.deck = [];
    this.dealt_cards = [];
  }

  generate_deck() {
    let card = (suit, value) => {
      this.name = `${value}_of_${suit}`;
      this.suit = suit;
      this.value = value;

      return {
        name: this.name,
        suit: this.suit,
        value: this.value
      };
    };

    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        this.deck.push(card(suits[s], values[v]));
      }
    }
  }

  shuffle() {
    let current_index = this.deck.length,
      temp_val,
      random_index;

    while (0 != current_index) {
      random_index = Math.floor(Math.random() * current_index);
      current_index -= 1;
      temp_val = this.deck[current_index];
      this.deck[current_index] = this.deck[random_index];
      this.deck[random_index] = temp_val;
    }
  }

  first_discard() {
    let dealt_card = this.deck.shift();
    this.dealt_cards.push(dealt_card);
    return dealt_card;
  }
}

// player setup and methods
class Player {
  constructor(name) {
    this.name = name; // this name needs to come from an input field
    this.cards = [];
  }

  draw() {
    let drawn_card = deck.deck.shift();
    this.cards.push(drawn_card);
    return drawn_card;
  }

  add_hand() {
    for (let i = 0; i < 5; i++) {
      let drawn_card = deck.deck.shift();
      this.cards.push(drawn_card);
    }
  }
}
//__________________________________________________________________________________________________________________________________
//Variables

//Card Values
let values = ["7", "8", "9", "10", "J", "Q", "K", "A"];
let suits = ["Clubs", "Diamonds", "Spades", "Hearts"];

//Deck Creation Variables
let deck = new Deck();
let playerOne = new Player("Deck1");
let playerTwo = new Player("Deck2");

//Rendering Variables

//__________________________________________________________________________________________________________________________________
// Game Setup

deck.generate_deck();
deck.shuffle();
deck.first_discard();
renderDiscarded();
playerOne.add_hand();
renderPlayerOne();
playerTwo.add_hand();
renderPlayerTwo();
setTimeout(() => {
  nextTurnPlayerOne();
}, 2000);

//__________________________________________________________________________________________________________________________________
//Rendering Functions
function renderPlayerOne() {
  //remove all children
  let playerOneContainer = document.getElementById("playerOne");
  while (playerOneContainer.firstChild) {
    playerOneContainer.removeChild(playerOneContainer.firstChild);
  }

  playerOne.cards.forEach(function (element) {
    let card = document.createElement("div");
    card.classList.add(
      "exampleCard",
      element.suit,
      element.value,
      "handPlayerOne",
      "styleImage",
    );

    playerOneContainer.appendChild(card);

    // card.textContent = element.name.replace(/_/g, " ");
    card.id = element.name;

    if (
      card.classList.contains(
        deck.dealt_cards[deck.dealt_cards.length - 1].suit
      ) ||
      card.classList.contains(
        deck.dealt_cards[deck.dealt_cards.length - 1].value
      )
    ) {
      card.classList.add("playable");
    }

    card.setAttribute(
      "style",
      "background-image: url(../img/" + element.name + ".jpg);"
    ); //adding Card Image

    if (element.value == "J") {
      card.classList.add("playable");
    }
  });
}

function renderPlayerTwo() {
  let playerTwoContainer = document.getElementById("playerTwo");
  while (playerTwoContainer.firstChild) {
    playerTwoContainer.removeChild(playerTwoContainer.firstChild);
  }

  playerTwo.cards.forEach(function (element) {
    let card = document.createElement("div");
    card.classList.add(
      "exampleCard",
      element.suit,
      element.value,
      "handPlayerTwo",
      "styleImage"
    );

    playerTwoContainer.appendChild(card);
    // card.textContent = element.name.replace(/_/g, " ");
    card.id = element.name;

    if (
      card.classList.contains(
        deck.dealt_cards[deck.dealt_cards.length - 1].suit
      ) ||
      card.classList.contains(
        deck.dealt_cards[deck.dealt_cards.length - 1].value
      )
    ) {
      card.classList.add("playable");
    }

    card.setAttribute(
      "style",
      "background-image: url(../img/" + element.name + ".jpg);"
    ); //adding Card Image

    if (element.value == "J") {
      card.classList.add("playable");
    }
  });
}

function renderDiscarded() {
  let discardedPile = document.getElementById("discarded");
  discardedPile.classList.add("styleImage");
  const lastCard = deck.dealt_cards.length - 1;
  discardedPile.setAttribute(
    "style",
    "background-image: url(img/" + deck.dealt_cards[lastCard].name + ".jpg);"
  );
  // discardedPile.textContent = deck.dealt_cards[lastCard].name.replace(
  //   /_/g,
  //   " "
  // );
}

//__________________________________________________________________________________________________________________________________
//Functions

//This Button will only appear when you have one or two cards in your deck *not finished*
function removeButton() {
  startButton.classList.add("hide");
}

function nextTurnPlayerOne() {
  restackDeck();
  endTurnOne.disabled = false;
  endTurnTwo.disabled = true;

  // Turn Display
  let turn = document.getElementById("turn");
  turn.textContent = "Turn Player One";

  if (
    playerOne.cards.findIndex(
      x => x.suit === deck.dealt_cards[deck.dealt_cards.length - 1].suit
    ) === -1 &&
    playerOne.cards.findIndex(
      x => x.value === deck.dealt_cards[deck.dealt_cards.length - 1].value
    ) === -1 &&
    playerOne.cards.findIndex(x => x.value === "J") === -1
  ) {
    setTimeout(() => {
      playerOne.draw();
      renderPlayerOne();
      renderPlayerTwo();
      renderDiscarded();
      nextTurnPlayerTwo();
    }, 1000);
  } else {
    let parentNode = document.getElementById("playerOne");
    let elementList = parentNode.querySelectorAll(".playable");
    let elementListArray = Array.from(elementList);

    elementListArray.forEach(function (el) {
      el.addEventListener("click", function () {
        let index = playerOne.cards.findIndex(x => x.name == this.id);
        let spliced = playerOne.cards.splice(index, 1);
        deck.dealt_cards.push(spliced[0]);
        renderPlayerOne();
        renderPlayerTwo();
        renderDiscarded();

        // special value cards
        if (spliced[0].value == "8") {
          nextTurnPlayerOne();
        } else if (spliced[0].value == "7") {
          playerTwo.draw();
          playerTwo.draw();
          renderPlayerTwo();
          nextTurnPlayerTwo();
        } else if (spliced[0].value == "J") {
          let container = document.createElement("div");

          container.innerHTML = `<div id="buttonContainer" class=" d-flex flex-column "> <button id="Hearts" onclick="playerOneWishHearts()" >Hearts</button> <button onclick="playerOneWishDiamonds()"id="Diamonds">Diamonds</button>  <button onclick="playerOneWishClubs()" id="Clubs">Clubs</button>  <button onclick="playerOneWishSpades()"  id="Spades">Spades</button> </div>`;

          document.getElementById("playerOne").appendChild(container);
        } else {
          nextTurnPlayerTwo();
        }
      });
    });
  }

  if (playerOne.cards.length == 0) {
    alert(`${playerOne.name} won`);
  } else if (playerTwo.cards.length == 0) {
    alert(`${playerTwo.name} won`);
  }
}

function nextTurnPlayerTwo() {
  restackDeck();
  endTurnOne.disabled = true;
  endTurnTwo.disabled = false;

  // Turn Display
  let turn = document.getElementById("turn");
  turn.textContent = "Turn Player Two";

  if (
    playerTwo.cards.findIndex(
      x => x.suit === deck.dealt_cards[deck.dealt_cards.length - 1].suit
    ) === -1 &&
    playerTwo.cards.findIndex(
      x => x.value === deck.dealt_cards[deck.dealt_cards.length - 1].value
    ) === -1 &&
    playerTwo.cards.findIndex(x => x.value === "J") === -1
  ) {
    setTimeout(() => {
      playerTwo.draw();
      renderPlayerOne();
      renderPlayerTwo();
      renderDiscarded();
      nextTurnPlayerOne();
    }, 1000);
  } else {
    let parentNode = document.getElementById("playerTwo");
    let elementList = parentNode.querySelectorAll(".playable");
    let elementListArray = Array.from(elementList);

    elementListArray.forEach(function (el) {
      el.addEventListener("click", function () {
        let index = playerTwo.cards.findIndex(x => x.name == this.id);
        let spliced = playerTwo.cards.splice(index, 1);
        deck.dealt_cards.push(spliced[0]);
        renderPlayerOne();
        renderPlayerTwo();
        renderDiscarded();

        // special value cards
        if (spliced[0].value == "8") {
          nextTurnPlayerTwo();
        } else if (spliced[0].value == "7") {
          playerOne.draw();
          playerOne.draw();
          renderPlayerOne();
          nextTurnPlayerOne();
        } else if (spliced[0].value == "J") {
          let container = document.createElement("div");

          container.innerHTML = `<div id="buttonContainer2" class=" d-flex flex-column"> <button id="Hearts" onclick="playerTwoWishHearts()" >Hearts</button> <button onclick="playerTwoWishDiamonds()"id="Diamonds">Diamonds</button>  <button onclick="playerTwoWishClubs()" id="Clubs">Clubs</button>  <button onclick="playerTwoWishSpades()"  id="Spades">Spades</button> </div>`;

          document.getElementById("playerTwo").appendChild(container);
        } else {
          nextTurnPlayerOne();
        }
      });
    });
  }

  // let endTurnTwo = document.getElementById("endTurnTwo");
  // endTurnTwo.addEventListener("click", function() {
  //   playerTwo.draw();
  //   renderPlayerOne();
  //   renderPlayerTwo();
  //   nextTurnPlayerOne();
  // });

  if (playerOne.cards.length == 0) {
    alert(`${playerOne.name} won`);
  } else if (playerTwo.cards.length == 0) {
    alert(`${playerTwo.name} won`);
  }
  counterPlayerTwo++;
}

function restackDeck() {
  if (deck.deck.length == 0) {
    deck.generate_deck();

    //delete the double card that equals the top card of the discarded pile
    let index = deck.deck.findIndex(
      x => x.name == deck.dealt_cards[deck.dealt_cards.length - 1].name
    );
    deck.deck.splice(index, 1);

    //delete the double cards that equal to the players current hand cards
    playerOne.cards.forEach(function (el) {
      let index = deck.deck.findIndex(x => x.name == el.name);
      deck.deck.splice(index, 1);
    });
    playerTwo.cards.forEach(function (el) {
      let index = deck.deck.findIndex(x => x.name == el.name);
      deck.deck.splice(index, 1);
    });

    deck.shuffle();
  }
}

// Jack functions player one
function playerOneWishHearts() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Hearts";
  renderPlayerTwo();
  nextTurnPlayerTwo();
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}

function playerOneWishDiamonds() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Diamonds";
  renderPlayerTwo();
  nextTurnPlayerTwo();
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}

function playerOneWishClubs() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Clubs";
  renderPlayerTwo();
  nextTurnPlayerTwo();
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}

function playerOneWishSpades() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Spades";
  renderPlayerTwo();
  nextTurnPlayerTwo();
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}

// Jack functions player two
function playerTwoWishHearts() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Hearts";
  renderPlayerOne();
  nextTurnPlayerOne();
  while (buttonContainer2.firstChild) {
    buttonContainer2.removeChild(buttonContainer2.firstChild);
  }
}

function playerTwoWishDiamonds() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Diamonds";
  renderPlayerOne();
  nextTurnPlayerOne();
  while (buttonContainer2.firstChild) {
    buttonContainer2.removeChild(buttonContainer2.firstChild);
  }
}

function playerTwoWishClubs() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Clubs";
  renderPlayerOne();
  nextTurnPlayerOne();
  while (buttonContainer2.firstChild) {
    buttonContainer2.removeChild(buttonContainer2.firstChild);
  }
}

function playerTwoWishSpades() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Spades";
  renderPlayerOne();
  nextTurnPlayerOne();
  while (buttonContainer2.firstChild) {
    buttonContainer2.removeChild(buttonContainer2.firstChild);
  }
}

document.getElementById("hideCard1").addEventListener("click", change);

function change(evt) {
  evt.preventDefault();
  console.log("hello");
  let changeBack = document.getElementById("playerOne");
  let nodeList = changeBack.querySelectorAll("div");

  let arrayList = Array.from(nodeList);
  console.log(arrayList);
  arrayList.forEach(function (element) {
    element.classList.toggle("hideStyle");
  });
}

// next turn button
let endTurnOne = document.getElementById("endTurnOne");
endTurnOne.addEventListener("click", function () {
  playerOne.draw();
  renderPlayerOne();
  nextTurnPlayerTwo();
});

let endTurnTwo = document.getElementById("endTurnTwo");
endTurnTwo.addEventListener("click", function () {
  playerTwo.draw();
  renderPlayerTwo();
  nextTurnPlayerOne();
});