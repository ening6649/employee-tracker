const inquirer = require("inquirer")
const db = require('./db/connection')

const MainDataArr =[]

const promptQuestions = ()=> {
    
    console.log(`
    ====================
      Employee Tracker
    ====================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'what would you like to do? (select one)',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
          
        },
      ])
      .then (employeeData=>{
     
        if (employeeData.type=="add an employee") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'employeenamefirst',
                    message: 'Enter the first name? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a first name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'employeenamelast',
                    message: 'Enter the last name(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter a last name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'employeerole',
                    message: 'Enter the role(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter a role!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'manager',
                    message: 'Enter the manager(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter a manager!');
                            return false;
                        }
                    }
                },
            ])
        } 

        if (employeeData.type=="add a department") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'departmentname',
                    message: 'Enter the department name? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a department name!');
                            return false;
                        }
                    }
                },
                
                // {
                //     type: 'confirm',
                //     name: 'confirmAdd',
                //     message: 'Would you like to add another person?',
                //     default: false,
                    
                // },
            ])        
        } 
        if (employeeData.type=="add a role") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'rolename',
                    message: 'Enter the name of the role? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter the salary(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter a salary!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'departmentrole',
                    message: 'Enter the office number(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter an office number!');
                            return false;
                        }
                    }
                },
             
                // {
                //     type: 'confirm',
                //     name: 'confirmAdd',
                //     message: 'Would you like to add another person?',
                //     default: false,
                    
                // },
            ])
        } 
        if (employeeData.type=="update an employee role") {
            return inquirer.prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: 'which employee role would you like to update? (select one)',
                    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
                  
                },
              
            ])
        } 
        if (employeeData.type=="view all departments") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name!');
                            return false;
                        }
                    }
                },
              
            ])
        } 
        if (employeeData.type=="view all roles") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name!');
                            return false;
                        }
                    }
                },
              
            ])
        } 
        if (employeeData.type=="view all employees") {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name!');
                            return false;
                        }
                    }
                },
              
            ])
        } 
      })
      .then (employeeData =>{
        // employeeData.employeeArr= [];
        console.log(employeeData)
        console.log("139")
        // testdata = new Employee ('')
        employeeArr.push(employeeData);
        console.log(employeeArr)
        console.log('143')
        if (employeeData.confirmAdd) {
            return promptQuestions(employeeArr);
        } else {
            return employeeArr; 
        }
      })
}



promptQuestions()
    
    .then(employeeData => {
        // if (!employeeData.confirmAdd)
        fs.writeFile('./dist/index.html', generateSite(employeeArr), err => {
        if (err) throw err;
        console.log('File saved!');
        })
    }) 





// call once somewhere in the beginning of the app
// const cTable = require('console.table');
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// // prints
// name  age
// ----  ---
// foo   10
// bar   20