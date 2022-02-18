// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}


//FileSystem.writeFile(fileName,data,err =>{
  //if (err){
   //   return console.log(err)}
  
  
 //})

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensers) {
  console.log(licensers)
 var auth = ""

  for( let i=0; i<licensers.length; i++)
  { 
    console.log(licensers[i])
switch (licensers[i]){
case "GNU GPLv3":
auth= auth +"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
break;
case  "GNU AGPLv3":
auth= auth + "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
break;
case "GNU LGPLv3":
auth= auth +"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
break;
}
}
console.log(auth)
if (auth.length == 0)
{return "you arent licensed to kill, or use any other software"} 
else {return auth}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const govtapproval = data.license
  const license = renderLicenseSection(govtapproval) 
  return ` ${license}
  # ${data.name}
  ## Table of Contents
  - [Project Description](#description)
  - [How to install](#How-to-install)
  - [Usage](#What-its-used-for)
  - [Author(s)](#Who-built-this)
  - [Questions](#Questions-and-how-to-reach-me)
  ## description
  ${data.description}
  ## How to install
  ${data.install}
  ## What its used for
  ${data.usage}
  ## Who built this
  ${data.contribution}
  ## What are the test parameters
  ${data.test}
  ## Questions and how to reach me
   [Github Repository](https://github.com/${data.gitName})
  [Email](mailto:${data.email})
  
  
`;

}

module.exports = generateMarkdown;
