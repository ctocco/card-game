// Deck setup and methods
class Deck {
  constructor() {
    this.deck = [];
    this.dealt_cards = [];
  }

  generate_deck() {
    let card = (suit, value) => {
      this.name = `${value} of ${suit}`;
      this.suit = suit;
      this.value = value;

      return { name: this.name, suit: this.suit, value: this.value };
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

  discard() {
    let discarded_card = this.cards.shift(); // this value needs to be flexible
    deck.dealt_cards.push(discarded_card);
    return discarded_card;
  }

  add_hand() {
    for (let i = 0; i < 5; i++) {
      let drawn_card = deck.deck.shift();
      this.cards.push(drawn_card);
    }
  }
}

// Game Setup

let startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);

let deck = new Deck();
let playerOne = new Player("Julian");
let playerTwo = new Player("Claudio");

function startGame() {
  deck.generate_deck();
  deck.shuffle();
  playerOne.add_hand();
  renderPlayerOne();
  playerTwo.add_hand();
  renderPlayerTwo();
  deck.first_discard();
  renderDiscarded();
  console.log(deck);
  console.log(playerOne);
  console.log(playerTwo);
  removeButton();
  searchValidCardsPlayerOne(); // would be executed on new turn
}

//Rendering
function renderPlayerOne() {
  playerOne.cards.forEach(function(element) {
    let card = document.createElement("div");
    card.classList.add("exampleCard");
    let playerOneContainer = document.getElementById("playerOne");
    playerOneContainer.appendChild(card);
    card.textContent = element.name;
  });
}

function renderPlayerTwo() {
  playerTwo.cards.forEach(function(element) {
    let card = document.createElement("div");
    card.classList.add("exampleCard");
    let playerTwoContainer = document.getElementById("playerTwo");
    playerTwoContainer.appendChild(card);
    card.textContent = element.name;
  });
}

function renderDiscarded() {
  let discardedPile = document.getElementById("discarded");
  const lastCard = deck.dealt_cards.length - 1;
  discardedPile.textContent = deck.dealt_cards[lastCard].name;
}

// experiment
// select all cards by class . if onclick value or suit of discarded pile equals value or suit of one card in player hand then let execute discard method then render

function searchValidCardsPlayerOne() {
  const validCards = playerOne.cards.filter(function(card) {
    return (
      card.suit === deck.dealt_cards[deck.dealt_cards.length - 1].suit ||
      card.value === deck.dealt_cards[deck.dealt_cards.length - 1].value
    );
  });

  console.log(validCards);
}

// if (deck.dealt_cards[deck.dealt_cards.length - 1].value == playerOne.cards[i]) {
// }

// Game simulation

// Game SetUp
// let deck = new Deck();
// let playerOne = new Player("Julian");
// let playerTwo = new Player("Claudio");

// deck.generate_deck();
// deck.shuffle();
// playerOne.add_hand();
// playerTwo.add_hand();
// deck.first_discard();

// GamePlay

// playerOne.draw();
// playerTwo.draw();
// playerOne.draw();
// playerTwo.draw();
// playerOne.draw();
// playerTwo.draw();
// playerOne.discard();

// console.log(playerOne);
// console.log(playerTwo);
// console.log(deck);

// Thoughts

// if card matches suits value or value value to latest in discarded array then player discard method can be executed

//extra

function removeButton() {
  startButton.classList.add("hide");
}
