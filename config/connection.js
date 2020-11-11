const mysql = require('mysql2')

const defaultConnection = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'P0pinahat!',
    database: 'burgers_db'
};

const connection = mysql.createConnection(defaultConnection);

module.exports = connection.promise();