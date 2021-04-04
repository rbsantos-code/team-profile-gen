// Dependencies Section
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');



// Function Section 
function init() {

    // function to add team
    function addTeam() {
        console.log("Let's meet the team!");
        inquirer.prompt([
            {
                // Ask which section to start
                type: 'list',
                name: 'meetTeam',
                message: "Who's on the team?",
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        // Start section depending on choice
        .then(userInput => {
            switch (userInput.meetTeam) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
            }
        });
    } 
    addTeam();
}
init();

