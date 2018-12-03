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

