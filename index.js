const inquirer = require("inquirer");
const { writeFile } = require("fs/promises")
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

    .then((data) => {
        console.log(data);
        var svgString = "";
        let shapeChoice = null;
        switch (data.shape) {
            case "circle":
                shapeChoice = new Circle();
                break;
            case "triangle":
                shapeChoice = new Triangle();
                break;
            default:
                shapeChoice = new Square();
                break;
        }
        shapeChoice.setColor(data.shapeColor);
        console.log(shapeChoice.getColor());
        svgString =
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        svgString += shapeChoice.render();
        svgString += `<text x="50%" y="50%" text-anchor="middle" fill="${data.textColor}" font-size="30px" font-family="Arial" dy=".3em">${data.text}</text>`;
        svgString += "</svg>";
        return writeFile("logo.svg", svgString);
    })
    .then(() => {
        console.log("Generated logo.svg");
    })
    .catch((err) => {
        console.log(err);
    });
