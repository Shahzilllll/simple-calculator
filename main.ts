#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{message: "Type first number", type: "number", name: "firstnumber"}, 
{message: "Type second number", type: "number", name: "secondnumber"},
{message: "Select the operator ou would like to use", type:"list",
choices: ["Addition", "Subtraction", "Multiplication", "Division"],
name: "operator",}
]); 
console.log(answer);

if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber)
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber)
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber)
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber)
}
else {
    console.log("ERROR 404")
};