//Gets each button and adds an event listener to each. Then when the button is clicked the playGame function is run and the buttons value is passed as a parameter
document.querySelectorAll(".buttons").forEach(button => button.addEventListener("click", ()=> rps.playGame(button.getAttribute("value"))));

//Contains the win/lose conditions for each choice in an object for easy accessibility
const choices = [
    {"choice": "rock", "beats": ["scissors", "lizard"], "losesTo": ["paper", "spock"]},

    {"choice": "paper", "beats": ["rock", "spock"], "losesTo": ["scissors", "lizard"]},

    {"choice": "scissors", "beats": ["paper", "lizard"], "losesTo": ["rock", "spock"]},

    {"choice": "lizard", "beats": ["spock", "paper"], "losesTo": ["rock", "scissors"]},

    {"choice": "spock", "beats": ["scissors", "rock"], "losesTo": ["lizard", "paper"]}
]

//Sets the machine choice and player choice
const players = {
    machineChoice: choices[Math.floor(Math.random() * choices.length)],
    humanChoice: ""
}

//Contains functions to reset, check win conditions, keep win/loss score and play the game
const rps = {

    //Keeps score of wins, losses and ties
    wins: 0,
    losses: 0,
    ties: 0,

    //Resets the game when called by enabling the buttons, removing the current output and generating a new machine choice
    resetGame() {
        document.querySelectorAll("#rock, #paper, #scissors, #lizard, #spock").forEach(button => button.disabled = false);
        document.getElementById("output").innerHTML = "";
        players.machineChoice = choices[Math.floor(Math.random() * choices.length)];
    },

    //Determines who wins based on the machine choice and the players choice
    whoWins() {

        //If the human choice and the machine choice are the same the game will tie
        if (players.machineChoice.choice === players.humanChoice) {
            document.getElementById("output").innerHTML = `<h2>Both chose ${players.humanChoice}</h2>`;
            document.getElementById("output").innerHTML += "<h2>You Tie!</h2>";
            document.getElementById("ties").innerHTML = `${this.ties+= 1}`;
        }

        //If the machine choice losesTo object contains the human choice the human wins the game
        if (players.machineChoice.losesTo.includes(players.humanChoice)) {
            document.getElementById("output").innerHTML = `<h2>${players.humanChoice} beats ${players.machineChoice.choice}</h2>`;
            document.getElementById("output").innerHTML += "<h2>Player Wins!</h2>";
            document.getElementById("wins").innerHTML = `${this.wins+= 1}`;
        }

        //If the machine choice beats object contains the human choice the machine wins the game
        if (players.machineChoice.beats.includes(players.humanChoice)) {
            document.getElementById("output").innerHTML = `<h2>${players.machineChoice.choice} beats ${players.humanChoice}</h2>`;
            document.getElementById("output").innerHTML += "<h2>Machine Wins!</h2>";
            document.getElementById("losses").innerHTML = `${this.losses+= 1}`;
        }

        //Disables the buttons after the decision is made
        document.querySelectorAll("#rock, #paper, #scissors, #lizard, #spock").forEach(button => button.disabled = true);
    },

    playGame(value) {
        if (value === "Rock") {
            players.humanChoice = choices[0].choice;
            this.whoWins();
        }

        else if (value === "Paper") {
            players.humanChoice = choices[1].choice;
            this.whoWins();
        }

        else if (value === "Scissors") {
            players.humanChoice = choices[2].choice;
            this.whoWins();
        }

        else if (value === "Lizard") {
            players.humanChoice = choices[3].choice;
            this.whoWins();
        }

        else if (value === "Spock") {
            players.humanChoice = choices[4].choice;
            this.whoWins();
        }

        else {
            this.resetGame()
        }
    }
}

