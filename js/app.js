let counterPlayerOne = 0;
let counterPlayerTwo = 0;

//__________________________________________________________________________________________________________________________________
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

//__________________________________________________________________________________________________________________________________
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

//Misc
let storedName1 = localStorage.getItem("pOne");
let storedName2 = localStorage.getItem("pTwo");
let playerTurn = 'playerOne';


//Rendering Variables

//__________________________________________________________________________________________________________________________________
// Game Setup
function gameSetup() {

  deck.generate_deck();
  deck.shuffle();
  deck.first_discard();
  renderDiscarded();
  playerOne.add_hand();
  renderPlayerOne();
  playerTwo.add_hand();
  renderPlayerTwo();
  readyPhase();
}

gameSetup();


//__________________________________________________________________________________________________________________________________
//Render Player 1


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

//__________________________________________________________________________________________________________________________________
//Render Player 2

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
//__________________________________________________________________________________________________________________________________
//Render Discarded

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
//Remove Button?

//This Button will only appear when you have one or two cards in your deck *not finished*
function removeButton() {
  startButton.classList.add("hide");
}

//__________________________________________________________________________________________________________________________________
//Next Turn Player One

function nextTurnPlayerOne() {
  restackDeck();
  endTurnOne.disabled = false;
  endTurnTwo.disabled = true;

  // Turn Display
  let turn = document.getElementById("turn");
  turn.textContent = storedName1 + `'s turn`;

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
      readyPhase();
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
        renderDiscarded();
        // special value cards
        if (spliced[0].value == "8") {
          nextTurnPlayerOne();
        } else if (spliced[0].value == "7") {
          playerTwo.draw();
          playerTwo.draw();
          renderPlayerTwo();
          readyPhase();
        } else if (spliced[0].value == "J") {
          let container = document.createElement("div");

          container.innerHTML = `<div id="buttonContainer" class=" d-flex flex-column "> <button id="Hearts" onclick="playerOneWishHearts()" >Hearts</button> <button onclick="playerOneWishDiamonds()"id="Diamonds">Diamonds</button>  <button onclick="playerOneWishClubs()" id="Clubs">Clubs</button>  <button onclick="playerOneWishSpades()"  id="Spades">Spades</button> </div>`;

          document.getElementById("playerOne").appendChild(container);
        } else {
          readyPhase();
        }
      });
    });
  }
}
//__________________________________________________________________________________________________________________________________
//Next Turn Player Two

function nextTurnPlayerTwo() {
  restackDeck();
  endTurnOne.disabled = true;
  endTurnTwo.disabled = false;

  // Turn Display
  let turn = document.getElementById("turn");
  turn.textContent = storedName2 + `'s turn`;

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
      readyPhase();
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
        renderPlayerTwo();
        renderDiscarded();

        // special value cards
        if (spliced[0].value == "8") {
          nextTurnPlayerTwo();
        } else if (spliced[0].value == "7") {
          playerOne.draw();
          playerOne.draw();
          readyPhase();
        } else if (spliced[0].value == "J") {
          let container = document.createElement("div");

          container.innerHTML = `<div id="buttonContainer2" class=" d-flex flex-column"> <button id="Hearts" onclick="playerTwoWishHearts()" >Hearts</button> <button onclick="playerTwoWishDiamonds()"id="Diamonds">Diamonds</button>  <button onclick="playerTwoWishClubs()" id="Clubs">Clubs</button>  <button onclick="playerTwoWishSpades()"  id="Spades">Spades</button> </div>`;

          document.getElementById("playerTwo").appendChild(container);
        } else {
          readyPhase();
        }
      });
    });
  }
  counterPlayerTwo++;
}
//__________________________________________________________________________________________________________________________________
//Restack Function

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
//__________________________________________________________________________________________________________________________________
//Special Cards Functions

// Jack functions player one
function playerOneWishHearts() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Hearts";
  readyPhase();
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}

function playerOneWishDiamonds() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Diamonds";
  readyPhase();
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}

function playerOneWishClubs() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Clubs";
  readyPhase();
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}

function playerOneWishSpades() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Spades";
  readyPhase();
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}

// Jack functions player two
function playerTwoWishHearts() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Hearts";
  readyPhase();
  while (buttonContainer2.firstChild) {
    buttonContainer2.removeChild(buttonContainer2.firstChild);
  }
}

function playerTwoWishDiamonds() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Diamonds";
  readyPhase();
  while (buttonContainer2.firstChild) {
    buttonContainer2.removeChild(buttonContainer2.firstChild);
  }
}

function playerTwoWishClubs() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Clubs";
  readyPhase();
  while (buttonContainer2.firstChild) {
    buttonContainer2.removeChild(buttonContainer2.firstChild);
  }
}

function playerTwoWishSpades() {
  deck.dealt_cards[deck.dealt_cards.length - 1].suit = "Spades";
  readyPhase();
  while (buttonContainer2.firstChild) {
    buttonContainer2.removeChild(buttonContainer2.firstChild);
  }
}

function changePlayerOne() {
  let changeBack = document.getElementById("playerOne");
  let nodeList = changeBack.querySelectorAll("div");

  let arrayList = Array.from(nodeList);
  arrayList.forEach(function (element) {
    element.classList.toggle("hideStyle");
  });
}

function changePlayerTwo() {
  let changeBack = document.getElementById("playerTwo");
  let nodeList = changeBack.querySelectorAll("div");

  let arrayList = Array.from(nodeList);
  arrayList.forEach(function (element) {
    element.classList.toggle("hideStyle");
  });
}

function toggleBoth() {
  let changeBack1 = document.getElementById("playerOne");
  let changeBack2 = document.getElementById("playerTwo");
  let nodeList1 = changeBack1.querySelectorAll("div");
  let nodeList2 = changeBack2.querySelectorAll("div");

  let arrayList1 = Array.from(nodeList1);
  arrayList1.forEach(function (element) {
    element.classList.add("hideStyle");
  });
  let arrayList2 = Array.from(nodeList2);
  arrayList2.forEach(function (element) {
    element.classList.add("hideStyle");
  });
}


function readyPhase() {
  renderPlayerOne();
  renderPlayerTwo();
  toggleBoth();
  if (playerOne.cards.length == 0) {
    bootbox.alert({
      message: `
      <div class="alert alert-dismissible alert-success mt-3">
  
  <strong>Well done!</strong> <h1>${storedName1} won!</h1>
</div>`,
      className: 'bb-alternate-modal'
    })
  } else if (playerTwo.cards.length == 0) {
    bootbox.alert({
      message: `
      <div class="alert alert-dismissible alert-success mt-3">
  
  <strong>Well done!</strong> <h1>${storedName2} won!</h1>
</div>`,
      className: 'bb-alternate-modal'
    });
  }
  // old style alert 

  //   alert(`${storedName1} won`);
  //   location.reload();
  // } else if (playerTwo.cards.length == 0) {
  //   alert(`${storedName2} won`);
  //   location.reload();
  // }
  function createModal() {
    let readyModal = document.getElementById("readyModal");
    readyModal.innerHTML = `<button id="readyModalButton" type="button" class="btn btn-success">Next Turn</button>`;
  }
  createModal();
  let getModalButton = document.getElementById("readyModalButton");
  getModalButton.addEventListener("click", function () {
    if (playerTurn == 'playerOne') {
      changePlayerTwo();
      nextTurnPlayerTwo();
      playerTurn = 'playerTwo';
      readyModal.innerHTML = ``;
    } else if (playerTurn == 'playerTwo') {
      changePlayerOne();
      nextTurnPlayerOne();
      playerTurn = 'playerOne';
      readyModal.innerHTML = ``;
    }
  })
}

// next turn button
let endTurnOneApp = document.getElementById("endTurnOne");
endTurnOneApp.addEventListener("click", function () {
  playerOne.draw();
  renderPlayerOne();
  readyPhase();
});

let endTurnTwoApp = document.getElementById("endTurnTwo");
endTurnTwoApp.addEventListener("click", function () {
  playerTwo.draw();
  renderPlayerTwo();
  readyPhase();
});