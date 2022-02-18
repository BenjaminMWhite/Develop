// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require("inquirer");
const fs = require('fs');
const { type } = require("os");
const generateMarkdown = require("./utils/generateMarkdown")
async function quieries(){
    
    const answers = await inquirer
 .prompt ([
{ 
type: "input",
name: 'name',
message: "what is your title",

},
{
type: "input",
name: 'description',
message: "Please describe what your program does",
},
{ 
    type: "input",
    name: 'install',
    message: "How do you install the program",
    
    },
    { 
        type: "input",
        name: 'usage',
        message: "How is it used?",
        
        },
        { 
            type: "input",
            name: 'contribution',
            message: "Who contributed to the file",
            },
            { 
            type: "input",
            name: 'test',
            message: "What are your test instructions",            
            },
            {
              type: 'checkbox',
              message: 'What license are you using?',
              name: 'license',
              choices: ['GNU AGPLv3', 'GNU GPLv3',  'GNU LGPLv3'],
            },
            {
                type: 'input',
                name: 'gitName',
                message: 'What is your github name?',
              },
              {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
              },
            
 ])
 return answers;
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err =>{
        if (err){
            return console.log(err)}
        
        
       })


}

// TODO: Create a function to initialize app
async function init() 
{const data = await quieries()

var max = generateMarkdown(data)
console.log(max)
writeToFile("Readme.md",max)
}

// Function call to initialize app
init()

