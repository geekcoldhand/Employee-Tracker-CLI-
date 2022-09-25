const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

// setting the local and enviorment port
const PORT = process.env.PORT || 3001;
// new express object called app
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database using host user pw and database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "company_db",
  },
  console.log(`Connected to ${database} database.`)
);