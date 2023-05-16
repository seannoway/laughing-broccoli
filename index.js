const inquirer = require("inquirer");
const{writeFile} = require("fs/promises")
const { Circle, Triangle, Square } = require("./lib/shapes");

const generateLogo = "";
const userQuestions = "";

const data = "";

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Please enter 3 characters:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Please enter a color for your text:",
    },
    {
      type: "list",
      name: "shape",
      message: "Pick a shape:",
      choices: ["triangle", "circle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Please enter a color for your shape:",
    },
  ])
