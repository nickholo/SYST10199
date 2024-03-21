//takes 2 arguments to add any two numbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

//creates an event listener to execute the function when a change is detected
userInput.addEventListener("change", function () {
  //sets the variables x and y equal to the user input
  let x = document.getElementById("num1").valueAsNumber;
  let y = document.getElementById("num2").valueAsNumber;
  //outputs the function result to the html output element
  document.getElementById("output").innerHTML = "<h2>" + x + " + " + y + " = " + addTwoNumbers(x, y) + "</h2>";
})
