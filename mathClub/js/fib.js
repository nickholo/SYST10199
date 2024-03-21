//creates an array to store the fibonacci sequence with the initial value of 0
let fibNumbers = [0];
//
let num0 = 1;
let num1 = 0;
let sum = 0;

//creates an event listener to execute the function when the submit button is clicked
submit.addEventListener("click", function() {
    //sets the fibonacci sequence limit equal to user input
    let num = document.getElementById("limit").valueAsNumber;
    //outputs the array to the html output element
    document.getElementById("output").innerHTML = "<h2>" + "Fibonacci Sequence:" + "<br>" + fibonacci(num) + "</h2>";
})

//calculates each number in the fibonacci sequence one by one
function fibonacci(num) {
    //loop to calculate each number until it reaches the limit
    while(fibNumbers.length < num) {
        //sets the fibonacci number equal to num0 + num1
        sum = num0 + num1;
        //sets num0 equal to num1
        num0 = num1;
        //sets num1 equal to the fibonacci number
        num1 = sum;
        //adds the fibonacci number to the array
        fibNumbers.push(sum);
    }
    //creates a line break in between each fibonacci number, so they're all on separate lines
    return fibNumbers.join("<br />");
}