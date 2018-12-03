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

  first_discard() {
    let dealt_card = this.deck.shift();
    this.dealt_cards.push(dealt_card);
    return dealt_card;
  }
}

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
}

let deck = new Deck();
let playerOne = new Player("Julian");
let playerTwo = new Player("Claudio");

deck.generate_deck();
deck.first_discard();
playerOne.draw();
playerTwo.draw();
playerOne.draw();
playerTwo.draw();
playerOne.draw();
playerTwo.draw();
playerOne.discard();

console.log(playerOne);
console.log(playerTwo);
console.log(deck);

// Thoughts

// if card matches suits value or value value to latest in discarded array then player discard method can be executed
