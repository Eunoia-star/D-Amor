const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "d-amor"
});

connection.connect((err) => {
  if (err) {
    console.log("Database gagal connect");
  } else {
    console.log("Database connected");
  }
});

module.exports = connection;