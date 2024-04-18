// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// Define the README template
// const README_TEMPLATE = `# {project_name}

// {description}

// ## Table of Contents
// {table_of_contents}

// ## Installation
// {installation_instructions}

// ## Usage
// {usage_instructions}

// ## License
// This project is licensed under the {license} License.

// ## Contributions
// {contributions}

// ## Testing
// {test_instructions}

// `;

//     // Promisify the question function
//     const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

//     (async () => {
//         try {
//             // Collect user input
//             const projectName = await question("Enter project title: ");
//             const description = await question("Enter project description: ");
//             const tableOfContents = await question("Enter table of contents for project: ");
//             const installationInstructions = await question("Enter installation instructions: ");
//             const usageInstructions = await question("Enter usage instructions: ");
//             const license = await question("Enter project license: ");
//             const contributions = await question("Enter project contribution guidelines and contributors: ");
//             const testInstructions = await question("Enter instructions for testing project: ");


//             // Replace placeholders in the README template
//             const readmeContent = README_TEMPLATE.replace(/{project_name}/g, projectName)
//                 .replace(/{description}/g, description)
//                 .replace(/{table_of_contents}/g, tableOfContents)
//                 .replace(/{installation_instructions}/g, installationInstructions)
//                 .replace(/{usage_instructions}/g, usageInstructions)
//                 .replace(/{license}/g, license)
//                 .replace(/{contributions}/g, contributions)
//                 .replace(/{test_instructions}/g, testInstructions)

//             // Write to README.md file
//             fs.writeFileSync('README.md', readmeContent);

//             console.log("README.md generated successfully.");
//         } catch (error) {
//             console.error("An error occurred:", error);
//         } finally {
//             rl.close();
//         }
//     })();
// }

// Call the function to generate README
generateReadme();


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
        name: 'contributions',
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

// Function that writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log('README File successfully created.')
    })
}

// Function that initializes app
function init() {
    inquirer.prompt(questions)
    .then((answerObj) => {
        const markdown = generateMarkdown(answerObj)

        writeToFile('README.md', markdown)
    })
    .catch((err) => {
        console.log(err)
    })
}

// Function call to initialize app
init();