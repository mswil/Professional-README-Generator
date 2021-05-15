// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to initialize app
const init = () => {
    //ask for data

    //generate markdown page
    const markdownPage = generateMarkdown(mockData);
    console.log(markdownPage);

    //write to file
    fs.writeFile("output/README.md", markdownPage, err => {
        if (err) {
            console.error(err);
            return;
        }
    })
}

const mockData = {
    title: "Mock Project",
    description: "This is mock data for the mock project",
    installation: "Again, who knows how to do this",
    usage: "use it",
    license: "apache",
    contributing: "who done it?",
    tests: "LIFE AIN'T SCHOOL!!!!",
    questions: "What is love? Baby, don't hurt me. Don't hurt me. No more"
}

// Function call to initialize app
init();

