const sum = {
    userInput: 0,
    incValue: 1,
    setNumber(num1) {
        this.userInput = num1;
    },
    increment(num1, num2) {
        return this.userInput + this.incValue;
    },
    display() {
        const userInput = document.getElementById("increment-num").valueAsNumber;
        sum.setNumber(userInput);
        document.getElementById("output").innerHTML = `<h2>${sum.userInput} + ${sum.incValue} = ${sum.increment()}`;
    }
}

document.getElementById("increment-num").addEventListener("change", sum.display);