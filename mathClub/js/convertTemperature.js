//creates an event listener to execute the function when the Celsius button is clicked
celsius.addEventListener("click", function fahrenheitToCelsius(){
  //sets temperature equal to the user input value
  let temperature = document.getElementById("userInput").valueAsNumber;
  //calculates the temperature in Celsius using the conversion equation
  let celsius = (temperature - 32) / 1.8;
  //outputs the result to the html output element
  document.getElementById("output").innerHTML = "<h2>" + temperature + " degrees fahrenheit is " + celsius + " degrees celsius" + "</h2>";
})

//creates and event listener to execute the function when the Fahrenheit button is clicked
fahrenheit.addEventListener("click", function celsiusToFahrenheit(){
  //sets temperature equal to the user input value
  let temperature = document.getElementById("userInput").valueAsNumber;
  //calculates the temperature in Fahrenheit using the conversion equation
  let fahrenheit = (temperature * 1.8) + 32;
  //outputs the result to the html output element
  document.getElementById("output").innerHTML = "<h2>" + temperature + " degrees celsius is " + fahrenheit + " degrees fahrenheit" + "</h2>";
})

