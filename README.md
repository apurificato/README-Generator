# README Generator Program

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
This README File generator program was built exclusively with JavaScript, Node.js, and use of node packages (npmjs.com). This little project is aimed at providing users with a tool that they can use to generate a README file in the command line terminal of VS Code. It's useful bc the program can be run in the platform while working on other projects in VSCode for quick generation of a README without typing everything out completely from scratch. Instead, the user makes use of shell commands to initiate a prompt that includes a series of questions that recieve input and then that input gets written into a newly generated, completed README file that is structured and organized with sections.

## Project Structure
- Develop/:
    - ./utils/ (folder containing a JavaScript file)
        - generateMarkdown.js (JavaScript file that will generate markdown data that goes into new created README file)
    - .gitignore (file that lists other files to be ignored by Github when pushing to repository)
    - package.json (file containing JSON data that is used by Inquirer API)
    - index.js (main JavaScript file that requires Inquirer API and FileSystem API; includes functions to prompt questions and write new file)
    - ./node_modules/ (folder containing data for)
<!-- - LICENSE (license for using the application, public use MIT license) -->
- README.md (Information file, providing information about the project)

## Tools and Technologies Used in This Project
- Javascript coding language
- Node JS (and node modules)
  - Inquirer Module (found on npmjs.com)
  - FS Module (native/included in Node.js)
- VS Code platform used to code and build pages
- Github (website hosted and deployed on Github servers)

## How to Use
Open project file in VS Code platform (this is where the files can be tested and the program can be run since it is not a front-end program or application). When folders/files are loaded into workstation tab on left, then open an integrated terminal in VS Code to use the command line. To run the program use commands in the terminal shell, specifically "node ./develop/index.js". This will start the inquirer module as well; it begins by triggering a prompt series of questions, beginning with asking what the user wants to name the title for the new README file they are generating.

The user continues to answer each question by inputting text of their choosing, corresponding to each question. The program then completes by writing a new file that is created in VS Code in the user's current open workstation. A new README file titled "new_README.md" specifically gets created; this new file will contain organized data in the form of structured/outlined sections combined with the new output data that the user initially inputted into the prompts as they went through each question. This file is essentially a basic, organized template that can be used/copied for any project.


## Contribution/Author
- Anthony Purificato


## Credits
- Rutgers Coding Bootcamp provided resources and support for this project
- Original start code was taken from: https://github.com/coding-boot-camp/potential-enigma
- OpenAI ChatGPT utilized for general coding assistance and aid upon encountering problems with JavaScript code


## License
Website is available for public use, hosted on Github servers, utilizing an MIT License - see the LICENSE file for details.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)
  
For more information on license please click the [Link](https://opensource.org/licenses/MIT)

## Questions
Check out my [GitHub](https://github.com/apurificato) 
  
For questions, reach out to me at undefined.