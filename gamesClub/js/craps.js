//creates variables for the dice rolled, their combined value, the recorded point
let die1, die2, dice, point;

//creates constant variables referring to the buttons
const playButton = document.getElementById("diceRoll");
const resetButton = document.getElementById("resetButton");

//function that generates two random numbers between 1-6, adds them and returns the value
function rollDice() {
  die1 = Math.floor(Math.random() * 6 + 1);
  die2 = Math.floor(Math.random() * 6 + 1);
  document.getElementById("output").innerHTML = "<h2>" + "You rolled a " + die1 + " and a " + die2 + "</h2>"
  return die1 + die2;
}

//function that executes the dice roll and determines if a natural or craps is hit on the first roll, continuing the game if not
function playGame() {
  dice = rollDice();

  if (dice === 7 || dice === 11) {
    document.getElementById("output").innerHTML += "<h2>" + "Natural, You Win! " + "</h2>";
    playButton.disabled = true;
  }

  else if (dice === 2 || dice === 3 || dice === 12) {
    document.getElementById("output").innerHTML += "<h2>" + "Craps, You Lose! " + "</h2>";
    playButton.disabled = true;
  }

  else {
    point = dice;
    document.getElementById("output").innerHTML += "<h2>" + "The point is: " + point + "</h2>";
    playButton.onclick = keepPlaying;
  }
}

//function that continues the game after the initial dice roll, records the point and sets the new win/lose conditions, keeps rolling until win or lose
function keepPlaying() {
  dice = rollDice();

  if (dice === point) {
    document.getElementById("output").innerHTML += "<h2>" + "Point Hit, You Win! " + "</h2>";
    playButton.disabled = true;
  }

  else if (dice === 7) {
    document.getElementById("output").innerHTML += "<h2>" + "Seven-out, You Lose! " + "</h2>";
    playButton.disabled = true;
  }
  else {
    document.getElementById("output").innerHTML += "<h2>" + "Roll Again! " + "</h2>"
  }
}

//function to reset the game
function resetGame() {
  location.reload();
}

//plays the game when the play button is clicked
playButton.onclick = playGame;

//restarts the game when the reset button is clicked
resetButton.onclick = resetGame;
