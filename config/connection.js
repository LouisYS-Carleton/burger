const mysql = require('mysql')

// async function connect () {
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3606,
    user: 'root',
    password: 'P0pinhat!',
    database: 'burgers_db'
});
// }
connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connected to DB as id: ${connection.threadId}`)
});

module.exports = connection;