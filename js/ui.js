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