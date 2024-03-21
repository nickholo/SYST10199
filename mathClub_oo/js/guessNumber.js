const guess = {

    random: Math.floor(Math.random() * 10) + 1,

    guess: 0,

    humanWins: 0,

    computerWins: 0,

    setGuess(userInput) {
        this.guess = userInput;
    },

    //win counter is incomplete, needs further work (numbers stay after reload, keeps adding wins after reload)
    determineWin() {
        if (this.guess === this.random) {
            this.humanWins = this.humanWins + 1;
            document.getElementById("human-wins").innerHTML = this.humanWins;
            return "You Win";
        }
        else {
            this.computerWins = this.computerWins + 1;
            document.getElementById("computer-wins").innerHTML = this.computerWins;
            return "You Lose";
        }
    },

    displayOutcome() {
        const userInput = document.getElementById("guess-number").valueAsNumber;
        guess.setGuess(userInput);
        document.getElementById("output").innerHTML = `<h2>${guess.determineWin()}</h2>`;
        document.getElementById("guess-submit").disabled = true;
    },

    resetGame() {
        location.reload()
    }
}

document.getElementById("guess-submit").addEventListener("click", guess.displayOutcome);
document.getElementById("guess-reset").addEventListener("click", guess.resetGame);