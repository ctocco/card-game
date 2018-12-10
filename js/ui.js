document.getElementById("reset").addEventListener("click", reset);

function reset(evt) {
  evt.preventDefault();
  console.log("hello");
  window.location.reload();
}

document.getElementById("endTurnOne").addEventListener("click", endTurnOne);

function endTurnOne(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  console.log("hello");
}

// input listeners for name
// document.getElementById("form-1").addEventListener("submit", addPlayer);

// function addPlayer(evt) {
//   evt.preventDefault();
//   let playerName = document.getElementById("inputPlayer1");
//   let playerNameValue = playerName.value;
//   console.log(playerNameValue);
//   document.getElementById(
//     "playerOneHeader"
//   ).textContent = `Player 1: ${playerNameValue}`;
// }

// document.getElementById("form-2").addEventListener("submit", addPlayer2);

// function addPlayer2(evt) {
//   evt.preventDefault();
//   let playerName = document.getElementById("inputPlayer2");
//   let playerNameValue = playerName.value;
//   console.log(playerNameValue);
//   document.getElementById(
//     "playerTwoHeader"
//   ).textContent = `Player 2: ${playerNameValue}`;
// }
// }



// Name input/local storage

// index.html
function submitName() {

  // Collecting the value of your text input
  let playerOneName = document.getElementById("playerOne");
  let playerTwoName = document.getElementById("playerTwo");

  // Storing the values above into localStorage
  localStorage.setItem("pOne", playerOneName.value);
  localStorage.setItem("pTwo", playerTwoName.value);

  window.open("maumau.html");

  return true;
}


// maumau.html
function displayNames() {
  let storedName1 = localStorage.getItem("pOne");
  let storedName2 = localStorage.getItem("pTwo");

  document.getElementById("playerOneHeader").innerHTML = "Player 1: " + storedName1;
  document.getElementById("playerTwoHeader").innerHTML = "Player 2: " + storedName2;
}