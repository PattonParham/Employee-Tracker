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

function runSearch(){
inquirer
    .prompt({})

}