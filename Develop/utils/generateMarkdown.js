// Return a license badge based on which license is passed; no license returns empty string
function renderLicenseBadge(license) {
  if (license == 'No license') {
    return ''
  } else {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-brightgreen.svg)`
  }
}

// Return license link; no license returns empty string
function renderLicenseLink(license) {
  if (license == 'No license') {
    return ''
  } else {
    return `(https://opensource.org/licenses/${license})`
  }
}

// Return license section for README; no license returns empty string
function renderLicenseSection(license) {
  return `
  ## License
  ${renderLicenseBadge(license)}
  
  This project is licensed under ${license}. \n
  For more information on license please click the [Link]${renderLicenseLink(license)}
  `
}

// Function to generate markdown data for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Credits and contributions
  ${data.contributions}

  ## Testing
  ${data.testing}

  ## Questions
  Check out my [GitHub](https://github.com/${data.github}) 
  
  For questions, reach out to me at ${data.email}.
`;
}

module.exports = generateMarkdown;
