const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require ("console.table");

let connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "Gatorade63!",
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

function updateEmployeeRole(){
    inquirer
    .prompt({
        name: "first",
        type: "input",
        message: "Enter the first name of the employee you would like to update the role id of:"
    }).then(function(namefirst){
        let first_name = namefirst.first;
        inquirer.prompt({
           name: "last",
           type: "input",
           message: "Enter the last name of the employee you would like to update the role id of:" 
        }).then(function(namelast){
            let last_name = namelast.last;
            inquirer.prompt({
                name: "update",
                type: "input",
                message: "Enter the value you would like to update this employee's role id number to:"
            }).then(function(updateid){
                let newroleID = updateid.update;
                let query = "UPDATE employees SET role_id = ? WHERE first_name = ? AND last_name = ?";
                let roleupdate = [newroleID, first_name, last_name];
                connection.query(query, roleupdate, function(err, result){
                    if (err) throw err;
                    console.log("Employee" + first_name + last_name + "'s role id number updated");
                });
            });
        });
    });

};

function addDRE(){
    inquirer
    .prompt({
        name: "action",
        type: "rawlist",
        message: "which would you like to add to?",
        choices: [
            "departments",
            "roles",
            "employees"
        ]
    }).then(function(answer){
        switch (answer.action){
            case "departments":
                // function addDept(){
                //     inquirer
                //     .prompt({
                //         name: "add",
                //         type: "input",
                //         message: "Input the department you would like to add:"
                //     })
                //     .then(function(department){
                //         let query = "INSERT INTO departments (name) VALUES (?)";
                //         connection.query(query, {add: department.add}, function(err){
                //             if (err) throw err;
                //             console.log("Department added");
                //         });
                        

                //     })
                // }
                function addDept(){
                    inquirer
                         .prompt({
                             name: "add",
                             type: "input",
                             message: "Input the department you would like to add:"
                         }).then(function(department){
                            let query = "INSERT INTO departments (name) VALUES (?)";
                            let dept = department.add;
                             connection.query(query, dept, function (err, result){
                                 if (err) throw err;
                                 console.log("Department added");
                             })
                            console.log(department.add)
                         })
     
                     }
                // function addDept(){
                    
                //     let query = "INSERT INTO departments (name) VALUES ('Company')";
                //     connection.query(query, function (err, result){
                //         if (err) throw err;
                //         console.log("success");
                //     })
                // }

                addDept();
            break;
            
            case "roles":
                function addRole(){
                    inquirer
                    .prompt({
                        name: "add",
                        type: "input",
                        message: "Input the title of the role you would like to add:"

                    })
                    .then(function(role){
                        
                        let title = role.add;
                        inquirer.prompt({
                            name: "addII",
                            type: "input",
                            message: "Input the salary of the title you just input:"

                        }).then(function(sal){
                            let salary = sal.addII
                            inquirer.prompt({
                            name: "addIII",
                            type: "input",
                            message: "Input the id of the department this role falls under:"

                            }).then(function(dptID){
                                let department_id = dptID.addIII;
                                let r = [title, salary, department_id];
                                let query = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
                                connection.query(query, r, function(err, result){
                                    if (err) throw err;
                                    console.log("Role added");
                                });

                            });
                        });

                    });
                    


                    // .then(function(role){
                    //     let query = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
                    //     let title = role.add;
                    //     let salary = role.addII;
                    //     let deptID = role.addIII;
                    //     let r = [title, salary, deptID]
                    //     connection.query(query, r, function(err, result){
                    //         if (err) throw err
                    //     }) 
                    

                }
                addRole();
            break;

            case "employees":
                function addEmployee(){
                    inquirer
                    .prompt({
                    name: "add",
                    type: "input",
                    message: "Input the first name of the employee you would like to add:"
                    }).then(function(first){
                        let firstname = first.add;
                        inquirer.prompt({
                            name: "addII",
                            type: "input",
                            message: "Input the last name of the employee you would like to add:"
                        }).then(function(last){
                            let lastname = last.addII;
                            inquirer.prompt({
                                name: "addIII",
                                type: "input",
                                message: "Input the corresponding id number of the employee's role you would like to add:"

                            }).then(function(rid){
                                let role_id = rid.addIII;
                                inquirer.prompt({
                                    name: "addIV",
                                    type: "input",
                                    message: "Input the corresponding id number of the employee's manager:"

                                }).then(function(mid){
                                    let manager_id = mid.addIV;
                                    let employee = [firstname, lastname, role_id, manager_id];
                                    let query = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
                                    connection.query(query, employee, function(err, result){
                                        if (err) throw err;
                                        console.log("Employee added");
                                    });

                                });
                            });

                        });

                    });

                };
                addEmployee();
            break;
        };


    });

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



