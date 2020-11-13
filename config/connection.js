const mysql = require("mysql2");

let connection;

try {
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      port: 3306,
      password: "P0pinahat!",
      database: "burgers_db",
    });
  }
} catch (err) {
  if (err) throw err;
}

module.exports = connection.promise();