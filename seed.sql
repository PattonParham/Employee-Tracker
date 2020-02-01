INSERT INTO departments (id, name) VALUES (1, "Food Service");
INSERT INTO departments (id, name) VALUES (2, "Grocery");
INSERT INTO departments (id, name) VALUES (3, "Produce");
INSERT INTO departments (id, name) VALUES (4, "Front End");

INSERT INTO roles (id, title, salary, department_id) VALUES (1, "Food Service Manager", 15, 1);
INSERT INTO roles (id, title, salary, department_id) VALUES (2, "Grocery Manager", 15, 2);
INSERT INTO roles (id, title, salary, department_id) VALUES (3, "Produce Manager", 15, 3);
INSERT INTO roles (id, title, salary, department_id) VALUES (4, "Front End Manager", 15, 4);
INSERT INTO roles (id, title, salary, department_id) VALUES (5, "Deli", 13, 1);
INSERT INTO roles (id, title, salary, department_id) VALUES (6, "Juicebar", 13, 1);
INSERT INTO roles (id, title, salary, department_id) VALUES (7, "Kitchen", 13, 1);
INSERT INTO roles (id, title, salary, department_id) VALUES (8, "Dish", 13, 1);
INSERT INTO roles (id, title, salary, department_id) VALUES (9, "Grocery", 15, 2);
INSERT INTO roles (id, title, salary, department_id) VALUES (10, "Produce", 15, 3);
INSERT INTO roles (id, title, salary, department_id) VALUES (11, "Casheir", 15, 4);

INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (1, "The", "Dude", 7, 1 );
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (2, "Towlie", "Towelson", 8, 1 );
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (3, "Homer", "Simpson", 10, 3 );
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (4, "Peter", "Griffin", 5, 1 );
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (5, "Jarjar", "Binks", 6, 1 );
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (6, "Sandy", "Cheeks", 9, 1 );
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (7, "Squidward", "Tentacles", 11, 1 );
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (8, "Mr.", "Burns", 1, 1);
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (9, "Randy", "Marsh", 2, 2 );
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (10, "Sharon", "Marsh", 3, 3 );
INSERT into employees (id, first_name, last_name, role_id, manager_id) VALUES (11, "Mr.", "Krabs", 4, 4 );