const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

// Connect to database using host user pw and database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "company_db",
  },
  console.log(`Connected to ${database} database.`)
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
        choices: ["View ", "Add", "Update", "Quit"],
        message: "What would you like to do?",
      },
    ])
    .then((data) => {
      // View all data
      if (data.ViewAddUpdate === "View") {
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
            inquirer.prompt([]);
            //User wants to view departments
            //User wants to view employees
          });
      }

      // Add all data
      if (data.ViewAddUpdate === "Add") {
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
            //User wants to add roles
            //User wants to add departments
            //User wants to add employees
          });
      }

      // update all data
      if (data.ViewAddUpdate === "Update") {
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
            //User wants to update departments
            //User wants to update employees
          });
      }
      // quit program
      if (data.ViewAddUpdate === "Quit") {
      }
    });
}
