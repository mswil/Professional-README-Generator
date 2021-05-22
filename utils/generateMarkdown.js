//supported licenses: Apache, BSD, GPL, MIT

// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) return "";

  const licenseCheck = license.toLowerCase();

  if (licenseCheck === "apache" || licenseCheck === "gpl") {

    return "![](https://img.shields.io/badge/license-" + license + "-blue)";
  }

  return "![](https://img.shields.io/badge/license-" + license + "-brightgreen)";
};

// a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  license = license.toLowerCase();
  switch (license) {
    case "apache":
      return "https://www.apache.org/licenses/";
      break;
    case "bsd":
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "gpl":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "mit":
      return "https://opensource.org/licenses/MIT";
      break;
    default:
      return "";
  }
};

// a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) return "";

  const link = renderLicenseLink(license);

  return `## License

  This project is covered under the ${license} license. For more detail, please go to [${link}](${link}).`

}

const renderInstallationSection = installation => {
  if (!installation) return '';

  return `## Installation

  ${installation}
`;
};

const renderUsageSection = usage => {
  if (!usage) return '';

  return ` ## Usage

  ${usage}
`;
};

const renderContributingSection = contributing => {
  if (!contributing) return '';

  return `## Contributing

  ${contributing}
`;
}

const renderTestsSection = tests => {
  if (!tests) return '';

  return `## Tests

  ${tests}
`;
}

const renderQuestionsSection = (github, email) => {
  if (!github || !email) return '';

  let questionSection = `## Questions`
  if (github) {
    questionSection += `

GitHub: [${github}](https://github.com/${github})`
  }

  if (email) {
    questionSection += `

If you have further questions, please email me at [${email}](${email})`
  }
  return questionSection;
}

const renderTableOfContents = data => {
  let table = ``;
  if (data.installation || data.usage || data.contributing || data.tests || data.github || data.tests) {
    table += `## Table of contents
  
`;
  }
  if (data.installation) table += `* [Installation](#installation)
`
  if (data.usage) table += `* [Usage](#usage)
`
  if (data.contributing) table += `* [Contributing](#contributing)
`
  if (data.tests) table += `* [Tests](#tests)
`
  if (data.github || data.email) table += `* [Questions](#questions)
`

  return table;
}

// a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

${renderTableOfContents(data)}

${renderInstallationSection(data.installation)}

${renderUsageSection(data.usage)}

${renderContributingSection(data.contributing)}

${renderTestsSection(data.tests)}

${renderQuestionsSection(data.github, data.email)}

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;

