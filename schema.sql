CREATE DATABASE employee_TrackerDB;

USE employee_TrackerDB;

CREATE TABLE departments(
id INT PRIMARY KEY,
name VARCHAR(30)
);

USE employee_TrackerDB;

CREATE TABLE roles(
id INT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT
);

USE employee_TrackerDB;

CREATE TABLE employees(
id INT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
);