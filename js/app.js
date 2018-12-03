alert("hello");


// Building a card deck

class Deck {
    constructor() {
        this.deck = []
        this.dealt_cards = []
    }
    generate_deck() {
        let card = (suit, value) => {
            this.name = value + ' of ' + suit;
            this.suit = suit;
            this.value = value;

            return {
                name: this.name,
                suit: this.suit,
                value: this.value
            }
        }

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];

        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                this.deck.push(card(suits[s], values[v]))

            }
        }
    }
    print_deck() {
        if (this.deck.length == 0) {
            console.log('The deck has been generated')
        } else {
            for (let c = 0; c < this.deck.length; c++) {
                console.log(this.deck[c])
            }
        }
    }
    shuffle() {
        let current_index = this.deck.length,
            temp_val, random_index

        while (0 != current_index) {
            random_index = Math.floor(Math.random() * current_index)
            current_index -= 1
            temp_val = this.deck[current_index]
            this.deck[current_index] = this.deck[random_index]
            this.deck[random_index] = temp_val
        }
    }
    deal() {
        let dealt_card = this.deck.shift()
        this.dealt_cards.push(dealt_card)
        return dealt_card
    }
    replace() {
        this.deck.unshift(this.dealt_cards.shift())
    }
    clear_deck() {
        this.deck = []
    }
}

deck = new Deck();

deck.generate_deck();
// deck.print_deck();
deck.shuffle();
deck.print_deck();
// console.log(deck.deal());



// Cards & Unicodes

let aceOfSpades = '\U+1F0A1';
let aceOfHearts = '\U+1F0B1';
let aceOfDiamonds = '\U+1F0C1';
let aceOfClubs = '\U+1F0D1';

let twoOfSpades = '\U+1F0D1';
let twoOfHearts = '\U+1F0B2';
let twoOfDiamonds = '\U+1F0C2';
let twoOfClubs = '\U+1F0D2';

let threeOfSpades = '\U+1F0A3';
let threeOfHearts = '\U+1F0B3';
let threeOfDiamonds = '\U+1F0C3';
let threeOfClubs = '\U+1F0D3';

let fourOfSpades = '\U+1F0A4';
let fourOfHearts = '\U+1F0B4';
let fourOfDiamonds = '\U+1F0C4';
let fourOfClubs = '\U+1F0D4';

let fiveOfSpades = '\U+1F0A5';
let fiveOfHearts = '\U+1F0B5';
let fiveOfDiamonds = '\U+1F0C5';
let fiveOfClubs = '\U+1F0D5';
 