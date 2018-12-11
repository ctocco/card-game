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

  playerOne.cards.forEach(function(element) {
    let card = document.createElement("div");
    card.classList.add(
      "exampleCard",
      element.suit,
      element.value,
      "handPlayerOne",
      "styleImage"
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
  });
}

function renderPlayerTwo() {
  let playerTwoContainer = document.getElementById("playerTwo");
  while (playerTwoContainer.firstChild) {
    playerTwoContainer.removeChild(playerTwoContainer.firstChild);
  }

  playerTwo.cards.forEach(function(element) {
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
  if (
    playerOne.cards.findIndex(
      x => x.suit === deck.dealt_cards[deck.dealt_cards.length - 1].suit
    ) === -1 &&
    playerOne.cards.findIndex(
      x => x.value === deck.dealt_cards[deck.dealt_cards.length - 1].value
    ) === -1
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

    elementListArray.forEach(function(el) {
      el.addEventListener("click", function() {
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
  counterPlayerOne++;
}

function nextTurnPlayerTwo() {
  if (
    playerTwo.cards.findIndex(
      x => x.suit === deck.dealt_cards[deck.dealt_cards.length - 1].suit
    ) === -1 &&
    playerTwo.cards.findIndex(
      x => x.value === deck.dealt_cards[deck.dealt_cards.length - 1].value
    ) === -1
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

    elementListArray.forEach(function(el) {
      el.addEventListener("click", function() {
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
        } else {
          nextTurnPlayerOne();
        }
      });
    });
  }

  if (playerOne.cards.length == 0) {
    alert(`${playerOne.name} won`);
  } else if (playerTwo.cards.length == 0) {
    alert(`${playerTwo.name} won`);
  }
  counterPlayerTwo++;
}
