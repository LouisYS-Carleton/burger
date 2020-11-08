const express = require('express');
const handlebars = require('express-handlebars');
const mysql = require('mysql');

// Connecting to mysql
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P0pinahat!",
    database: "burgers_db"
}); 
  
let burgers;
  
connection.connect(function (err) {  
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);

    // connection.query("SELECT * FROM burgers", function (error, res) {
    //     burgers = res.map(burgers => ({ name: burgers.title, value: burgers.id   }))
    // })
})