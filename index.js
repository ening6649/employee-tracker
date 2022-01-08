const inquirer = require("inquirer");
const db = require('./db/connection');
const cTable = require('console.table');

const employeeArr =[]

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
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit']
          
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
                    message: 'Enter the manager',
                },
            ])
            
        } 
        // insert into employee 
        // (first_name, last_name)
        // values 
        // ('sd', 'this', )
        // ($(data), $(id),)


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
            
            // return inquirer.prompt([
                // {
                //     type: 'confirm',
                //     name: 'viewdepartments',
                //     message: 'Would you like to all roles?',
                //     default: true,
                // },
                
            // ]).then (answers=>{
                const sql = `select*from department`
                db.query(sql,(err,result)=>{
                if (err) throw err;
                
                console.table(
                    result
                    )
                })
            //  })
              
            
        } 
        if (employeeData.type=="view all roles") {
            return inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'viewroles',
                    message: 'Would you like to all roles?',
                    default: true,
                },
              
            ])
        } 
        if (employeeData.type=="view all employees") {
            const sql = `select*from employee`
            db.query(sql,(err,result)=>{
            if (err) throw err;
            
            console.table(
                result
                )
            })
        } 
        if (employeeData.type=="exit") {
            return 
        
        }
      })
      .then (employeeData =>{
        // employeeData.employeeArr= [];
        console.log(employeeData)
        console.log("139")
        // testdata = new Employee ('')
        employeeArr.push(employeeData);
       
        // if (employeeData.exit) {
        //     return employeeArr;
        // } 
        // else {
        //     return promptQuestions(employeeArr); 
        // }
      })
}



promptQuestions()
    .then(employeeData=>{
        console.log('data passed')
        console.log(employeeData)
        for (let i = 0; i < employeeArr.length-1; i++) {
            if (employeeArr[i].employeenamefirst) {
                const sql= `insert into employee
                    (first_name, last_name, role_id)
                    values
                    (?,?,?)`;
                const params = [
                    employeeArr[i].employeenamefirst,
                    employeeArr[i].employeenamelast,
                    employeeArr[i].employeerole
                ];
                db.query(sql,params,(err,result)=>{
                    if (err) throw err;
                    console.log(result);
                    // res.json({
                    //     message: 'success',
                    //     data: employeeArr
                    // });
                })
                console.log('insert fired')
            }
            if (employeeArr[i].rolename) {
                const sql = `insert into role
                    (Title, Salary)
                    values
                    (?,?)`;
                const params = [
                    employeeArr[i].rolename,
                    employeeArr[i].salary
                ];
                db.query(sql,params,(err,result)=>{
                    if (err) {
                        res.status(400).json({ error: err.message });
                        return;
                    }
                })
            }
            if (employeeArr[i].departmentname) {
                const sql = `insert into department
                    (Department_name)
                    values
                    (?)`;
                const params = [
                    employeeArr[i].departmentname
                ];
                db.query(sql,params,(err,result)=>{
                    if (err) {
                        res.status(400).json({ error: err.message });
                        return;
                    }
                })
            }

            
        }
         
    })




