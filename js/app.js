// Deck setup and methods
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

    let values = ["7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = ["Clubs", "Diamonds", "Spades", "Hearts"];

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

  playerOneDiscard(q) {
    // let indexArray = getAllIndexes(
    //   playerOne.cards,
    //   deck.dealt_cards[deck.dealt_cards.length - 1].suit,
    //   deck.dealt_cards[deck.dealt_cards.length - 1].value
    // );

    let spliced = playerOne.cards.splice(q, 1);
    deck.dealt_cards.push(spliced[0]);
  }

  add_hand() {
    for (let i = 0; i < 5; i++) {
      let drawn_card = deck.deck.shift();
      this.cards.push(drawn_card);
    }
  }
}

// Game Setup

let deck = new Deck();
let playerOne = new Player("Julian");
let playerTwo = new Player("Claudio");

deck.generate_deck();
deck.shuffle();
deck.first_discard();
renderDiscarded();
playerOne.add_hand();
renderPlayerOne();
playerTwo.add_hand();
renderPlayerTwo();

// document.getElementById("container").addEventListener("click", function() {
//   playerOne.playerOneDiscard();
//   renderPlayerOne();
//   renderDiscarded();
// });

// searchValidCardsPlayerOne(); // !!
console.log(deck);
console.log(playerOne);
console.log(playerTwo);

//Rendering
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
      "styleImage"
    );

    playerOneContainer.appendChild(card);

    card.textContent = element.name.replace(/_/g, " ");
    card.id = element.name;
    if (
      card.classList.contains(
        deck.dealt_cards[deck.dealt_cards.length - 1].suit
      ) ||
      card.classList.contains(
        deck.dealt_cards[deck.dealt_cards.length - 1].value
      )
    ) {
      card.setAttribute("onclick", "reply_click(this.id)");

      card.setAttribute(
        "style",
        "background-image: url(img/" + element.name + ".jpg);"
      );
    }
  });
}

function renderPlayerTwo() {
  playerTwo.cards.forEach(function (element) {
    let card = document.createElement("div");
    card.classList.add(
      "exampleCard",
      element.suit,
      element.value,
      "handPlayerTwo"
    );
    let playerTwoContainer = document.getElementById("playerTwo");
    playerTwoContainer.appendChild(card);
    card.textContent = element.name.replace(/_/g, " ");
  });
}

function renderDiscarded() {
  let discardedPile = document.getElementById("discarded");
  const lastCard = deck.dealt_cards.length - 1;
  discardedPile.textContent = deck.dealt_cards[lastCard].name;
}

document.getElementById("playerNameOne").innerText = `Player 1: ${
  playerOne.name
}`;
document.getElementById("playerNameTwo").innerText = `Player 2: ${
  playerTwo.name
}`;

//extra

function removeButton() {
  startButton.classList.add("hide");
}

function getAllIndexes(arr, suit, value) {
  let indexes = [],
    i;
  for (i = 0; i < arr.length; i++)
    if (arr[i].suit === suit || arr[i].value === value) indexes.push(i);
  return indexes;
}

function reply_click(theId) {
  let index = playerOne.cards.findIndex(x => x.name == theId);
  console.log(index);
  let spliced = playerOne.cards.splice(index, 1);
  deck.dealt_cards.push(spliced[0]);
  renderPlayerOne();
  renderDiscarded();
}