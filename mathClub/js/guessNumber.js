//generates a random number between 0 and 1 then multiplies it by 10 to create a range between 0 and 10, then adds 1 to create a minimum of 1
let random = Math.floor(Math.random() * 10) + 1;

//creates an event listener that executes the function when the submit button is clicked
submit.addEventListener("click", function guessNumber(){

  //sets guess equal to the user input value
  let guess = document.getElementById("userInput").valueAsNumber;

  //boolean to determine if the user won the game or not
  if (guess === random){
    //since the guess is equal to the random value, the win message is outputted to the html output element
    document.getElementById("output").innerHTML = "<h2>" + "You Win" + "</h2>";
  }

  else {
    //since the guess isn't equal to the random value, the loss message is outputted to the html output element
    document.getElementById("output").innerHTML = "<h2>" + "You Lose" + "</h2>";
  }
})
