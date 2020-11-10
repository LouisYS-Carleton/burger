const db = require('./connection')

const orm = {
    selectAll: (burgerTable, cb) => {
        const burgerQuery = `SELECT * FROM ${burgerTable}`;
        connection.query(burgerQuery, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: (burgerTable, newBurger, cb) => {
        const burgerQuery = `INSERT INTO ${burgerTable} (burger_name) VALUES ${newBurger}`;
        connection.query(burgerQuery, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: (burgerTable, burgerID, cb) => {
        const burgerQuery = `UPDATE ${burgerTable} SET devoured = true  WHERE id = ${burgerID}`;
        connection.query(burgerQuery, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;
