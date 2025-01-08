const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "database",
});

connection.connect((err) => {
  if (err) {
    console.log("Đéo được thằng ngu ơiii");
  } else console.log("Hay lắm");
});

module.exports = connection;
