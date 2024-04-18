// TODO: Include packages needed for this application

const fs = require('fs');
const readline = require('readline');

// Define the README template
const README_TEMPLATE = `# {project_name}

{description}

## Table of Contents
{table_of_contents}

## Installation
{installation_instructions}

## Usage
{usage_instructions}

## License
This project is licensed under the {license} License.

## Contributions
{contributions}

## Testing
{test_instructions}

`;

// Function to generate README
function generateReadme() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Promisify the question function
    const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

    (async () => {
        try {
            // Collect user input
            const projectName = await question("Enter project title: ");
            const description = await question("Enter project description: ");
            const tableOfContents = await question("Enter table of contents for project: ");
            const installationInstructions = await question("Enter installation instructions: ");
            const usageInstructions = await question("Enter usage instructions: ");
            const license = await question("Enter project license: ");
            const contributions = await question("Enter project contribution guidelines and contributors: ");
            const testInstructions = await question("Enter instructions for testing project: ");


            // Replace placeholders in the README template
            const readmeContent = README_TEMPLATE.replace(/{project_name}/g, projectName)
                .replace(/{description}/g, description)
                .replace(/{table_of_contents}/g, tableOfContents)
                .replace(/{installation_instructions}/g, installationInstructions)
                .replace(/{usage_instructions}/g, usageInstructions)
                .replace(/{license}/g, license)
                .replace(/{contributions}/g, contributions)
                .replace(/{test_instructions}/g, testInstructions)

            // Write to README.md file
            fs.writeFileSync('README.md', readmeContent);

            console.log("README.md generated successfully.");
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            rl.close();
        }
    })();
}

// Call the function to generate README
generateReadme();


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();