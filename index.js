const inquirer = require("inquirer")

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
                    name: 'name',
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
                    name: 'email',
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
            ])
        } 

        if (employeeData.type=="engineer") {
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
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the email(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter an email address!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter the github username(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter a github username!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter an ID ',
                    default:"1"
                },
                {
                    type: 'confirm',
                    name: 'confirmAdd',
                    message: 'Would you like to add another person?',
                    default: false,
                    
                },
            ])        
        } 
        if (employeeData.type=="manager") {
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
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the email(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter an email address!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officenumber',
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
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter an ID ',
                    default:"1"
                },
                {
                    type: 'confirm',
                    name: 'confirmAdd',
                    message: 'Would you like to add another person?',
                    default: false,
                    
                },
            ])
        } 
        if (employeeData.type=="intern") {
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
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the email(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter an email address!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter the school(Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter a school!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter an ID ',
                    default:"1"
                },
                {
                    type: 'confirm',
                    name: 'confirmAdd',
                    message: 'Would you like to add another person?',
                    default: false,
                    
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
        console.log("line97 fired")
        fs.writeFile('./dist/index.html', generateSite(employeeArr), err => {
        if (err) throw err;
        console.log('File saved!');
        })
    }) 


  insert 