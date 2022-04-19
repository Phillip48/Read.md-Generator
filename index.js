// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
