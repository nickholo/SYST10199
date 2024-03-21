const sum = {
  num1: 0,
  num2: 0,
  setNumbers(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  },
  add() {
    return this.num1 + this.num2
  },
  display() {
    const num1 = document.getElementById("add-num1").valueAsNumber;
    const num2 = document.getElementById("add-num2").valueAsNumber;
    sum.setNumbers(num1, num2);
    document.getElementById("output").innerHTML = `<h2>${sum.num1} + ${sum.num2} = ${sum.add()}`;
  }
}
document.querySelectorAll(".num-selector").forEach(inputs=> addEventListener("click", sum.display))



