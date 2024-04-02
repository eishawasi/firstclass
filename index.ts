#!/usr/bin/env noden
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number ", type: "number", name: "first number" },
  { message: "Enter second number", type: "number", name: "second number" },
  {
    message: "select one of the opration to perfom action",
    type: "list",
    name: "opreator",
    choices: ["adition", "subtraction", "multiplication","divide"],
  },
]);

if(answer.opreator === "Addition") {
    console.log( answer.firstnumber + answer.secondnumber );
}