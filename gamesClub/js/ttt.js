//sets the initial player to X
let player = "X";

//sets the game state to empty, this will be used to record the moves played
let gameBoardState = ["", "", "", "", "", "", "", "", ""];

//sets the initial number of moves to 9
let remainingTurns = 9;

//creates a variable to store the state of the game, true is win, false means the game is ongoing
let gameState;

//a 2D array containing all the possible winning combinations
const winSets = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//a constant directly referring to the reset button
const resetButton = document.getElementById("resetButton");

//selects each cell and adds an event listener to execute the clickCell function when a cell is clicked on
document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", clickCell));

//adds an event listener to execute the resetGame function when the reset button is clicked
resetButton.addEventListener("click", resetGame);

//function determining what happens when a cell is clicked on
function clickCell(cellClicked) {

  //determines which cell was clicked using the event listener
  const cell = cellClicked.target;

  //sets the position in the index equal to the clicked cells' id value and converts it from string to a number
  const cellIndex = parseInt(cell.getAttribute("id"));

  //if the box is empty onclick, set the game state at the cells index position and the text of the cell to the current players symbol
  if (gameBoardState[cellIndex] === "") {
    gameBoardState[cellIndex] = player;
    cell.innerHTML = player;
    remainingTurns -= 1;
    winOrLose();

    //if the state of the game is false, the game is ongoing and the next player is selected
    if (gameState === false) {
      playerSelector();
    }

    //if the state of the game is true, a player has won and the event listeners are removed to prevent extra turns
    if (gameState === true) {
      document.querySelectorAll("td").forEach(cell => cell.removeEventListener("click", clickCell));
    }
  }
}

//function determining who's turn it is
function playerSelector() {

  //if the current player is X, change player to O
  if (player === "X") {
    document.getElementById("output").innerHTML = "<h2>" + "O's Turn!" + "</h2>";
    return player = "O";
  }

  //if the current player is O, change to X
  else {
    document.getElementById("output").innerHTML = "<h2>" + "X's Turn!" + "</h2>";
    return player = "X";
  }
}

//function to determine win or lose conditions
function winOrLose() {

  //loops through the 8 possible winning combinations
  for (let i = 0; i <= 7; i++) {

    //sets the win condition equal to the win set being checked in the for loop
    const winCondition = winSets[i];

    //sets the value of each position equal to the game board positions
    let position1 = gameBoardState[winCondition[0]];
    let position2 = gameBoardState[winCondition[1]];
    let position3 = gameBoardState[winCondition[2]];

    //if the three adjacent positions contain a blank space the game continues
    if (position1 === "" || position2 === "" || position3 === "") {
      gameState = false;
    }

    //if the three adjacent positions contain the same symbol, the game ends and that player wins
    else if (position1 === position2 && position2 === position3) {
      gameState = true;
      document.getElementById("output").innerHTML = "<h2>" + player + " Wins!" + "</h2>";
    }

    //if the board is full and no more turns can be played a draw is called
    else if (remainingTurns === 0) {
      document.getElementById("output").innerHTML = "<h2>" + "You Tie!" + "</h2>";
    }
  }
}

function resetGame() {
  location.reload();
}



