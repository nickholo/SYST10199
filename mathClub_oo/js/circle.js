circle = {
    radius: 1,

    setRadius(userInput) {
        this.radius = userInput;
    },

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    },

    displayArea() {
        const userInput = document.getElementById("radius").valueAsNumber;
        if (userInput < 0) {
            document.getElementById("output").innerHTML = "<h2>" + "Radius cannot be negative" + "</h2>";
        }
        else {
            circle.setRadius(userInput);
            document.getElementById("output").innerHTML = `<h2> Circle with radius of ${userInput} has area of ${circle.calculateArea()} </h2>`;
        }
    }
}

document.getElementById("radius").addEventListener("click", circle.displayArea);