// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your Email address?',
    },
    {
        type: 'input',
        name: 'userTitle',
        message: 'What is the title for this project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Write a short description for this project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write your installation link here:',
    },
    {
        type: 'input',
        name: 'photosOne',
        message: 'Input your first photo here:',
    },
    {
        type: 'input',
        name: 'photoDescriptionOne',
        message: 'Input your first description for first photo here:',
    },
    {
        type: 'input',
        name: 'photosTwo',
        message: 'Input your second photo here:',
    },
    {
        type: 'input',
        name: 'photoDescriptionTwo',
        message: 'Input your second description for your second photo here:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'runTest',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'userKnowledge',
        message: 'What does the user need to know about using this repo?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed in this project?',
    },
    // {
    //     type: 'input',
    //     name: 'photos',
    //     message: 'Enter yourn photos: (Enter to skip)',
    // },
];

//Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then((data) => {
            // const fileName = `${data.questions.name.toLowerCase().split(' ').join('')}.json`;

            fs.writeFile('README.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Success!')
            );
        });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
