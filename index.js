function rollDice() {
    //   console.log("roll");
    //   Dom Elements
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const disSum = document.getElementById("sum");

    const result1 = rollSingleDie();
    const result2 = rollSingleDie();

    const sum = result1 + result2;

    die1.innerHTML = result1;
    die2.innerHTML = result2;
    dieSum.innerHTML = "Sum: " + sum;
}