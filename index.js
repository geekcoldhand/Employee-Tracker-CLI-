const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

// construct database obj using host user pw and database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "helloDBCooper",
    database: "company_db",
  },
  console.log(`Connected to database.`)
);

// connect to db using the connnect method
db.connect((error) => {
  if (error) console.error(error);

  console.log("////////////////////////");
  console.log("CONNECTED TO COMPANY_DB");
  console.log("////////////////////////");

  systemStart();
});

function systemStart() {
  inquirer
    .prompt([
      {
        name: "viewAddUpdate",
        type: "list",
        choices: ["View", "Add", "Update", "Quit"],
        message: "What would you like to do?",
      },
    ])
    .then((data) => {
      // User want to View all data
      if (data.viewAddUpdate === "View") {
        inquirer
          .prompt([
            {
              name: "viewList",
              type: "list",
              choices: ["Employee", "Roles", "Departments", "Quit"],
              message: "What would you like to view?",
            },
          ])
          .then((view) => {
            //User wants to view roles
            if (view.viewList === "Roles") viewRoles();
            //User wants to view departments
            if (view.viewList === "Departments") viewDepartments();
            //User wants to view employees
            if (view.viewList === "Employee") viewEmployees();
          });
      }

      // User wants to Add all data
      if (data.viewAddUpdate === "Add") {
        inquirer
          .prompt([
            {
              name: "addList",
              type: "list",
              choices: ["Employee", "Roles", "Departments", "Quit"],
              message: "What would you like to add?",
            },
          ])
          .then((add) => {
            if (add.addList === "Roles")
              //User wants to add roles
              inquirer
                .prompt([
                  {
                    name: "title",
                    type: "list",
                    choices: ["Employee", "Roles", "Departments"],
                    message: "Whats the title?",
                  },
                  {
                    name: "salary",
                    type: "input",
                    message: "What salary would you like to add?",
                  },
                  {
                    name: "department",
                    type: "list",
                    choices: ["Employee", "Roles", "Departments", "Quit"],
                    message: "What department does this belong to?",
                  },
                ])
                .then((answer) =>
                  addRoles([answer.title, answer.salary, answer.department])
                );

            if (add.addList === "Departments")
              //User wants to add departments
              addDepartments();
            if (add.addList === "Employee")
              //User wants to add employees
              addEmployees();
          });
      }

      // User wants to update all data
      if (data.viewAddUpdate === "Update") {
        inquirer
          .prompt([
            {
              name: "updateList",
              type: "list",
              choices: ["Employee", "Roles", "Departments", "Quit"],
              message: "What would you like to update?",
            },
          ])
          .then((update) => {
            if (update.updateList === "Roles")
              //User wants to update roles
              updateRoles();
            if (update.updateList === "Departments")
              //User wants to update departments
              updateDepartments();
            if (update.updateList === "Employee")
              //User wants to update employees
              updateEmployees();
          });
      }
      // quit program
      if (data.ViewAddUpdate === "Quit") {
        console.log("///////////////");
        console.log("CONNECTION ENED");
        console.log("///////////////");
        db.end();
      }
    });
}

function viewEmployees() {
  // get all columns from  employees tables
  db.query("SELECT * FROM employee", function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}
function viewRoles() {
  // get all columns from roles tables
  db.query("SELECT * FROM roles", function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}
function viewDepartments() {
  // get all departments from roles tables
  db.query("SELECT * FROM department", function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}

function addRoles(newRole) {
  // get id, title dep and salary
  sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;

  db.query(sql, newRole, function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}
function addDepartments(newDep) {
  // get id, name
  sql = `INSERT INTO departments (name) VALUES (?)`;
  db.query(sql, newDep, function (err, res) {
    if (err) console.error(err);
    console.clear();
    console.table(res);
    console.log("New department added!");
  });
}
function addEmployees(newEmploy) {
  // get id, name, l.name, title, dep., salary, manager
  sql = `INSERT INTO employee (first_name, last_name, title, department, salary, manager) VALUES (?,?,?,?,?,?)`;
  db.query(sql, newEmploy, function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}

function updateRoles(role_id) {
  sql = `INSERT INTO roles WHERE id = ${role_id}`;
  db.query(sql, function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}
function updateDepartments(dep_id) {
  sql = `INSERT INTO roles WHERE id = ${dep_id}`;
  db.query(sql, function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}
function updateEmployees(emp_id) {
  sql = `INSERT INTO roles WHERE id = ${emp_id}`;
  db.query(sql, function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}

function deleteRoles(curr_id) {
  db.query(`DELETE FROM roles WHERE id = ${curr_id}`, function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}
function deleteDepartments(curr_id) {
  db.query(`DELETE FROM roles WHERE id = ${curr_id}`, function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}
function deleteEmployee(curr_id) {
  db.query(`DELETE FROM roles WHERE id = ${curr_id}`, function (err, res) {
    if (err) console.error(err);
    console.table(res);
  });
}
