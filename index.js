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

    // Manager Section
    function addManager() {
        inquirer.prompt([
            {
                // Manager name
                type: 'input',
                name: 'manager',
                message: "Please enter manager's name",
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log('Enter manager name!');
                        return false;
                    }
                }
            },
            {
                // Manager ID 
                type: 'input',
                name: 'idManager',
                message: 'Enter Manager ID',
                validate: idManager => {
                    if (idManager) {
                        return true;
                    } else {
                        console.log('Enter manager ID');
                        return false;
                    }
                }
            },
            {
                // Manager Email
                type: 'input',
                name: 'emailManager',
                message: "Enter manager's email",
                validate: emailManager => {
                    if (emailManager) {
                        return true;
                    } else {
                        console.log('Enter Email!');
                        return false;
                    }
                }
            },
            {
                // Manager Phone Number
                type: 'input',
                name: 'numberManager',
                message: "Enter manager's phone number",
                validate: numberManager => {
                    if (numberManager) {
                        return true;
                    } else {
                        console.log('Enter phone number!');
                        return false;
                    }
                }
            }
        ])
    }

    addTeam();
}
init();

