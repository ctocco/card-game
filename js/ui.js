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