//creates variables to store the human choice, the machine choice, the random number and the choices array
let humanChoice, randomNum, machineChoice, choices;

//creates constants referring to the buttons used
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("resetButton");

//creates an array storing the possible choices
choices = ["Rock", "Paper", "Scissors"];

//chooses a random number
randomNum = Math.floor(Math.random() * choices.length - 1) + 1;

//sets the machine choice equal to the position in the array chosen by the random number
machineChoice = choices[randomNum];

//when the rock button is clicked, set the humans choice to rock and play the game
rockButton.onclick = function() {
  humanChoice = document.getElementById("rock").value;
  rps(humanChoice,machineChoice)
  buttonDisable();
}

//when the paper button is clicked, set the humans choice to paper and play the game
paperButton.onclick = function() {
  humanChoice = document.getElementById("paper").value;
  rps(humanChoice, machineChoice)
  buttonDisable();
}

//when the scissors button is clicked, set the humans choice to scissors and play the game
scissorsButton.onclick = function() {
  humanChoice = document.getElementById("scissors").value;
  rps(humanChoice, machineChoice)
  buttonDisable();
}

//when the reset button is clicked, reset the game
resetButton.onclick = resetGame;

//function to play the game
function rps (humanChoice, machineChoice) {

  //possible win or lose conditions
  if (humanChoice === machineChoice) {
    document.getElementById("output").innerHTML = "<h2>" + "You Tie" + "</h2>";
  }

  else if (humanChoice === choices[0] && machineChoice === choices[1]) {
    document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>"
  }

  else if (humanChoice === choices[0] && machineChoice === choices[2]) {
    document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>"
  }

  else if (humanChoice === choices[1] && machineChoice === choices[0]) {
    document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>"
  }

  else if (humanChoice === choices[1] && machineChoice === choices[2]) {
    document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>"
  }

  else if (humanChoice === choices[2] && machineChoice === choices[0]) {
    document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>"
  }

  else if (humanChoice === choices[2] && machineChoice === choices[1]) {
    document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>"
  }
}

//function to reset the game
function resetGame() {
  location.reload();
}

//function to disable the buttons
function buttonDisable() {
  rockButton.disabled = true;
  scissorsButton.disabled = true;
  paperButton.disabled = true;
}
