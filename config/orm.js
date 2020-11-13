const connection = require('./connection')

const orm = {
    selectAll: async (burgerTableName) => {
        const burgerQuery = 'SELECT * FROM ??';

        const [rows] = await connection.query(burgerQuery, [burgerTableName])
        return rows;
    },
    insertOne: async (burgerTableName, newBurger, status) => {
        const burgerQuery = 'INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)';

        const [rows] = await connection.query(burgerQuery, [burgerTableName, newBurger, status])
        return rows;
    },
    updateOne: async (burgerTableName, burgerID) => {
        const burgerQuery = 'UPDATE ?? SET devoured = true  WHERE id = ??';

        const [rows] = await connection.query(burgerQuery, [burgerTableName, burgerID])
        return rows;
    }
};

module.exports = orm;
