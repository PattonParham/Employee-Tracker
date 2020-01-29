const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require ("console.table");

let connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "",
database: "employee_trackerDB"
});

connection.connect(function(err){
    if (err) throw err;
    runTracker();
});

function runTracker(){
inquirer
    .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
            "Add departments, roles or employees",
            "View departments, roles or employees",
            "Update employee roles"
        ]
    })
    .then(function(answer){
        switch(answer.action){
            case "Add departments, roles or employees":
            addDRE();
            break;

            case "View departments, roles or employees":
            viewDRE();
            break;

            case "Update employee roles":
            updateEmployeeRole();
            break;
        }
    });
}

function viewDRE(){
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "Which would you like to view information about?",
            choices: [
                "Departments",
                "Roles",
                "Employees"
            ]


        }).then(function(answer){
            switch (answer.action){
                
                case "Departments":
                viewDepartments();
                break;

                case "Roles":
                viewRoles();
                break;

                case "Employees":
                viewEmployees();
                break;
            }
        });


}

// function viewDepartments(){
//     let query = "SELECT * FROM departments WHERE ?";
//     connection.query(query, {department: answer.departments})
// }

