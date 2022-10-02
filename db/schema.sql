DROP DATABASE if EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;


CREATE TABLE Departments(
    id int not null AUTO_INCREMENT primary key,
    name varchar(30) not null);
    

CREATE TABLE Roles(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (Department_id) REFERENCES Departments(id));

-- table 3
CREATE TABLE Employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES Roles(id));
