// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Provide instructions for testing your application.',
        name: 'testing',
      },
      {
        type: 'list',
        message: 'Choose a license for your application.',
        choices: ['GNU General Public License v3.0', 'MIT License'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Provide the link to your github profile.',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
    ])
};

// TODO: Create a function to write README file
const writeToFile = ({title, description, installation, usage, contributing, tests, license, github, email}) => {
  // Add a variable to store the badge URL based on the selected license
  let badgeURL;

  // Set the license information based on the selected license
  if (license === 'GNU General Public License v3.0') {
    badgeURL = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    licenseInfo = 'Please refer to the GNU General Public License v3.0 information [here](https://www.gnu.org/licenses/gpl-3.0.en.html#license-text).';
  } else if (license === 'MIT License') {
    badgeURL = 'https://img.shields.io/badge/License-MIT-yellow.svg';
    licenseInfo = 'Please refer to the MIT License information [here](https://opensource.org/license/mit/).';
  }

return `# ${title}

## Description

${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## License

![License](${badgeURL})

${licenseInfo}

## Questions

Github profile: [${github}](${github}).

If you have any additional questions about this application, please reach out to me via email at [${email}](${email}).`;
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((results) => fs.writeFile('readme.md', writeToFile(results), (err) =>
    err ? console.error(err) : console.log('Success!'))
)};

// Function call to initialize app
init();
