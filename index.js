const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

// Connect to database using host user pw and database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "helloDBCooper",
    database: "company_db",
  },
  console.log(`Connected to database.`)
);

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
              addRoles();
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
            //User wants to update roles
            updateRoles();
            //User wants to update departments
            updateDepartments();
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
  console.log("zzzzeynopw");

  db.query(
    "SELECT employee.first_name FROM company_db.employee",
    function (err, res) {
      if (err) console.error(err);
      console.table(res);
    }
  );
  console.log("heynopw");
}

function viewRoles() {
  // get all columns from roles tables
}
function viewDepartments() {
  // get all departments from roles tables
}

function addRoles() {
  // get id, title dep and salary
}
function addDepartments() {
  // get id, name
}
function addEmployees() {
  // get id, name, l.name, title, dep., salary, manager
}

function updateRoles() {}
function updateDepartments() {}
function updateEmployees() {}
