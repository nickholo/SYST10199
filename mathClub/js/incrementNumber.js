//takes 2 arguments to add any two numbers
//if a single argument is passed it will increment that argument by 1
function incrementNumber(num1, num2 = 1) {
  return num1 + num2;
}

//creates an event listener that executes the function when a change is detected
userInput.addEventListener("change", function() {
  //sets the argument equal to the user input value
  let value = document.getElementById("userInput").valueAsNumber;
  //calls the function and outputs to the html output element
  document.getElementById("output").innerHTML = "<h2>" + value + " + 1 = " + incrementNumber(value) + "</h2>";
})
