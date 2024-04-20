// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What title do you want to give your project/README file?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to choose?',
        choices: ['No license', 'MIT'],
        default: 'No license'
    },

    {
        name: 'description',
        message: 'Provide a short description overview about the project'
    },

    {
        name: 'installation',
        message: 'What does the user need to do in order to install the project?'
    },

    {
        name: 'usage',
        message: 'What does the user need to do in order to use and interact with this application/program?'
    },

    {
        name: 'credits',
        message: 'Include contributions made, as well as credits for the project.'
    },

    {
        name: 'github',
        message: 'What is your github username?'
    },

    {
        name: 'contact',
        message: 'What is your email address?'
    }

];

// Function that triggers prompt and asks questions for building markdown data
function ask() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log('Answer', answers)
        const markdown = generateMarkdown(answers)

        writeToFile('new_README.md', markdown)
    })
    .catch((err) => {
        console.log(err)
    })
}

// Function that writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log('README File successfully created.')
    })
}

// Function call to initialize app
ask();