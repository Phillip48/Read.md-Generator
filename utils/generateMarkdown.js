// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n*[License](#) \n`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 
    
    This project is licensed under ${license}`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.userTitle}  
${renderLicenseBadge(data.license)}  
  
## Table of contents   
-[Description](#Description)  
-[Information](#Information)   
-[Images](#Images)    
-[Installation](#Installation)    
-[Contributors](#Contributors)  

## Description  
${data.projectDescription}

## Information  
${data.userKnowledge}

### Images  
![Img 1](${data.photosOne})  
${data.photoDescriptionOne}   
![Img 2](${data.photosTwo})   
${data.photoDescriptionTwo}  

## Installation   
${data.installation}  

## Contact Me  
Github: ${data.userName}  
Email: ${data.userEmail}  

## Contributors  
*${data.contributors}*  

  `;
}

module.exports = generateMarkdown;
