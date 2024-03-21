temp = {
    tempUI: 0,
    setTemp(userInput) {
        this.tempUI = userInput
    },

    celsiusToFahrenheit() {
        return (this.tempUI * 9/5) + 32;
    },

    fahrenheitToCelsius() {
        return (this.tempUI - 32) * 5/9;
    },

    displayTemp(id) {
        const userInput = document.getElementById("temp-num").valueAsNumber;
        temp.setTemp(userInput);

        if(id === 'celsius') {
            document.getElementById("output").innerHTML = `<h2>${userInput} degrees celsius is ${temp.celsiusToFahrenheit()} degrees fahrenheit`;
        }
        else {
            document.getElementById("output").innerHTML = `<h2>${userInput} degrees fahrenheit is ${temp.fahrenheitToCelsius()} degrees celsius`;
        }
    }
}

document.getElementById("celsius").addEventListener("click", function() {
    const id = 'celsius'
    temp.displayTemp(id)
});

document.getElementById("fahrenheit").addEventListener("click", temp.displayTemp)