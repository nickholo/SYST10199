const choices = [
    {"choice": "rock", "beats": "scissors", "losesTo": "paper"},

    {"choice": "paper", "beats": "rock", "losesTo": "scissors"},

    {"choice": "scissors", "beats": "paper", "losesTo": "rock"}
]

const players = {
    humanChoice: 0,
    machineChoice: choices[Math.floor(Math.random() * choices.length)],
    setHumanChoice(userInput) {
        this.humanChoice = userInput;
    }
}

const rps = {
    wins: 0,
    losses: 0,
    ties: 0,

    disableGame() {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    },

    resetGame() {
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
        document.getElementById("output").innerHTML = "";
        players.machineChoice = choices[Math.floor(Math.random() * choices.length)];
    },

    playGame() {

        if(players.machineChoice.choice === choices[players.humanChoice].choice) {
            document.getElementById("output").innerHTML = `<h2>Both chose ${players.machineChoice.choice}</h2>`;
            document.getElementById("output").innerHTML += "<h2>You Tie!</h2>";
            document.getElementById("ties").innerHTML = `${this.ties+= 1}`;
        }

        else if(players.machineChoice.losesTo.includes(choices[players.humanChoice].choice)) {
            document.getElementById("output").innerHTML = `<h2>${choices[players.humanChoice].choice} beats ${players.machineChoice.choice}</h2>`;
            document.getElementById("output").innerHTML += "<h2>Player Wins!</h2>";
            document.getElementById("wins").innerHTML = `${this.wins+= 1}`;
        }

        else if(players.machineChoice.beats.includes(choices[players.humanChoice].choice)) {
            document.getElementById("output").innerHTML = `<h2>${players.machineChoice.choice} beats ${choices[players.humanChoice].choice}</h2>`;
            document.getElementById("output").innerHTML += "<h2>Machine Wins!</h2>";
            document.getElementById("losses").innerHTML = `${this.losses+= 1}`
        }
        this.disableGame();
    }
}

document.getElementById("rock").addEventListener("click", function() {
    players.setHumanChoice(0)
    rps.playGame();
});
document.getElementById("paper").addEventListener("click", function() {
    players.setHumanChoice(1)
    rps.playGame();
});
document.getElementById("scissors").addEventListener("click", function() {
    players.setHumanChoice(2)
    rps.playGame();
});
document.getElementById("reset-button").addEventListener("click", rps.resetGame);