const fibonacci = {

    fibArray: [0, 1],

    limit: 0,

    setLimit(userInput) {
        this.limit = userInput;
    },

    findNumbers() {
        while(this.fibArray.length < this.limit) {
            const num = this.fibArray[this.fibArray.length - 1] + this.fibArray[this.fibArray.length - 2];
            this.fibArray.push(num);
        }
        return this.fibArray.join("<br />")
    },

    displayFib() {
        const userInput = document.getElementById("fib-limit").valueAsNumber;
        fibonacci.setLimit(userInput);
        document.getElementById("output").innerHTML = `<h2>Fibonacci Sequence: <br> ${fibonacci.findNumbers()}`;
    }
}

document.getElementById("fib-submit").addEventListener("click", fibonacci.displayFib);