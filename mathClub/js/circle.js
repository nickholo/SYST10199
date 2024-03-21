//gets circle area by getting radius to the power of 2 and multiplying by pi
function circleArea(r) {
    return Math.PI * Math.pow(r, 2);
}

//creates an event listener to execute the function when a change is detected
userInput.addEventListener("change", function() {
    //sets radius equal to the user input value
    let radius = document.getElementById("userInput").valueAsNumber;
    //boolean to determine if radius is a negative number
    if (radius < 0) {
        //since radius is less than 0 the output will not be a number
        document.getElementById("output").innerHTML = "<h2>" + "Radius cannot be negative" + "</h2>";
    }
    else {
        //since radius is positive the function is called and the result is outputted to the html output element
        document.getElementById("output").innerHTML = "<h2>" + "Circle with radius of " + radius + " has area of " + circleArea(radius) + "</h2>";
    }
})