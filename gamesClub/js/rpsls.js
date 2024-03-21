//creates variables to store the human choice, the machine choice, the random number and the choices array
let humanChoice, randomNum, machineChoice, choices;

//creates constants referring to the buttons used
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const lizardButton = document.getElementById("lizard");
const spockButton = document.getElementById("spock");
const resetButton = document.getElementById("resetButton");

//creates an array storing the possible choices
choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

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

//when the lizard button is clicked, set the humans choice to lizard and play the game
lizardButton.onclick = function() {
  humanChoice = document.getElementById("lizard").value;
  rps(humanChoice, machineChoice)
  buttonDisable();
}

//when the spock button is clicked, set the humans choice to spock and play the game
spockButton.onclick = function() {
  humanChoice = document.getElementById("spock").value;
  rps(humanChoice, machineChoice)
  buttonDisable();
}

//when the reset button is clicked, reset the game
resetButton.onclick = resetGame;

//function to play the game
function rps (humanChoice, machineChoice) {

  //choices are the same causing a tie
  if (humanChoice === machineChoice) {
    document.getElementById("output").innerHTML = "<h2>" + "You Tie" + "</h2>";
  }

  //user chooses rock
  else if (humanChoice === choices[0]) {

    //machine randomly chooses paper, user loses
    if (machineChoice === choices[1]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>";
    }

    //machine randomly chooses scissors, user wins
    else if (machineChoice === choices[2]) {
      document.getElementById("output").innerHTML = "<h2>"+ "You Win" +"</h2>";
    }

    //machine randomly chooses lizard, user wins
    else if (machineChoice === choices[3]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>";
    }

    //machine randomly chooses spock, user loses
    else if (machineChoice === choices[4]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>"
    }
  }

  //user chooses paper
  else if (humanChoice === choices[1]) {

    //machine randomly chooses rock, user wins
    if (machineChoice === choices[0]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>";
    }

    //machine randomly chooses scissors, user loses
    else if (machineChoice === choices[2]) {
      document.getElementById("output").innerHTML = "<h2>"+ "You Lose" +"</h2>";
    }

    //machine randomly chooses lizard, user loses
    else if (machineChoice === choices[3]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>";
    }

    //machine randomly chooses spock, user wins
    else if (machineChoice === choices[4]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>"
    }
  }

  //user chooses scissors
  else if (humanChoice === choices[2]) {

    //machine randomly chooses rock, user loses
    if (machineChoice === choices[0]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>";
    }

    //machine randomly chooses paper, user wins
    else if (machineChoice === choices[1]) {
      document.getElementById("output").innerHTML = "<h2>"+ "You Win" +"</h2>";
    }

    //machine randomly chooses lizard, user wins
    else if (machineChoice === choices[3]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>";
    }

    //machine randomly chooses spock, user loses
    else if (machineChoice === choices[4]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>"
    }
  }

  //user chooses lizard
  else if (humanChoice === choices[3]) {

    //machine randomly chooses rock, user loses
    if (machineChoice === choices[0]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>";
    }

    //machine randomly chooses paper, user wins
    else if (machineChoice === choices[1]) {
      document.getElementById("output").innerHTML = "<h2>"+ "You Win" +"</h2>";
    }

    //machine randomly chooses scissors, user loses
    else if (machineChoice === choices[2]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>";
    }

    //machine randomly chooses spock, user wins
    else if (machineChoice === choices[4]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>"
    }
  }

  //user chooses spock
  else if (humanChoice === choices[4]) {

    //machine randomly chooses rock, user wins
    if (machineChoice === choices[0]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>";
    }

    //machine randomly chooses paper, user loses
    else if (machineChoice === choices[1]) {
      document.getElementById("output").innerHTML = "<h2>"+ "You Lose" +"</h2>";
    }

    //machine randomly chooses scissors, user wins
    else if (machineChoice === choices[2]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>";
    }

    //machine randomly chooses lizard, user loses
    else if (machineChoice === choices[3]) {
      document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>"
    }
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
  lizardButton.disabled = true;
  spockButton.disabled = true;
}