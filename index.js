// packages needed for this application
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require('inquirer');
const { resolve } = require('path');

// an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project\'s title?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.error('No title entered!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description: ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.error('No description entered!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you have?',
        choices: ['Apache', 'BSD', 'GPL', 'MIT']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who has contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any tests for your project: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: '
    }
];

// a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });

    })
}

// a function to initialize app
const init = () => {
    //ask for data
    inquirer.prompt(questions)
        .then(userInput => {

            //generate markdown page
            const markdownPage = generateMarkdown(userInput);
            console.log(markdownPage);
            return markdownPage;
        })
        .then(markdownPage => writeToFile('output/README.md', markdownPage))
        .catch(err => console.error(err));
}

const mockData = {
    title: "Mock Project",
    description: "This is mock data for the mock project",
    installation: "Again, who knows how to do this",
    usage: "use it",
    license: "apache",
    contributing: "who done it?",
    tests: "LIFE AIN'T SCHOOL!!!!",
    github: "theonion",
    email: "NoSpamPlz"
}

// Function call to initialize app
init();

