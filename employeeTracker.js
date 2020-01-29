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

function addDRE(){
    inquirer
    .prompt({
        name: "action",
        type: "rawlist",
        message: "which would you like to add to?",
        choices: [
            "departments",
            "roles",
            "employeees"
        ]
    }).then(function(answer){
        switch (answer.action){
            case "departments":
            break;
            
            case "roles":
            break;

            case "employees":
            break;
        }


    })

}

function viewDRE(){
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "Which would you like to view information about?",
            choices: [
                "departments",
                "roles",
                "employees"
                
            ]


        }).then(function(answer){
            switch (answer.action){
                
                case "departments":
                function viewDepartments(){
                let query = "SELECT * FROM departments";
                connection.query(query, function (err, res){
                    if (err) throw err;
                    console.log(res);
                });
               
                }
                viewDepartments();
                runTracker();
                break;

                case "roles":
                function viewRoles(){
                let query = "SELECT * FROM roles";
                 connection.query(query, function(err, res){
                     if (err) throw err;
                     console.log(res);
                 });
                }
                viewRoles();
                runTracker();
                break;

                case "employees":
                function viewEmployees(){
                let query = "SELECT * FROM employees";
                connection.query(query, function(err, res){
                    if (err) throw err;
                    console.log(res);
                });
               
                }
                viewEmployees();
                runTracker();
                break;

            }
        });


}



