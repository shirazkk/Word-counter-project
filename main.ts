#!/usr/bin/env node
import inquirer from "inquirer"; // Import the inquirer package
import chalk from "chalk";
console.log(chalk.yellow.bold("Welcome to Word Count Project!\n"));

// Create an object 'wordcount' with a property 'sentence' which is a string

const wordcount: {
  sentence: string;
} = await inquirer.prompt([
  // Use inquirer to ask a question to the user
  {
    message: chalk.blue.bold.italic(
      "Enter your sentence to count the words",
      "\n"
    ), // Message displayed on the CLI
    type: "input", // The type is input
    name: "sentence", //with the name sentence
    validate: (input: string) => {
      const checkvalidation =
        input.trim() === "" ? chalk.red.bold("Please Enter Valid Word") : true; // Check if the user enters nothing; return this message if empty, otherwise return true.

      return checkvalidation;
    },
  },
]);

// Use trim() to remove extra spaces from the sentence and split() to separate each word into an array
console.log(chalk.redBright("\nWord Count Result:"));
const ourSentence = wordcount.sentence.trim().split(" ");

console.log(ourSentence);

// Count the number of words by getting the length of the array
const result = ourSentence.length;
console.log(chalk.cyan("Number of words: ", chalk.yellowBright(result)));
