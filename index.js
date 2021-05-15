// TODO: Include packages needed for this application
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.error(err);
            return;
        }
    })
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


writeToFile("test.txt", "hello world");
