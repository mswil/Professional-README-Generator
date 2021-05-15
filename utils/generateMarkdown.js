//supported licenses: Apache, BSD, GPL, MIT

// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) return "";

  const licenseCheck = license.toLowerCase();

  if (licenseCheck === "apache" || licenseCheck === "gpl") {

    return "https://img.shields.io/badge/license-" + license + "-blue";
  }

  return "https://img.shields.io/badge/license-" + license + "-brightgreen";
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if(!license) return "";

  const link = renderLicenseLink(license);
  
  return `## License
  This project is covered under the ${license} license. For more detail, please go to [${link}](${link}).`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

const mockData = "mit";
console.log(renderLicenseBadge(mockData));
console.log(renderLicenseLink(mockData));
console.log(renderLicenseSection(mockData));
