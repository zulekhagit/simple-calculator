#!  /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: " enter your first number", type: "number", name: "firstNumber" },
    { message: " enter your second number", type: "number", name: "secondNumber" },
    { message: "select one of operators to perform action ", type: "list", name: "operators", choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"] },
]);
//conditional operators
if (answer.operators === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "SUBTRACTIONS") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    " please select a correct operator";
}
