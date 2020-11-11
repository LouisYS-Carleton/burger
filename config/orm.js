const connection = require('./connection')

const orm = {
    selectAll: async (burgerTableName) => {
        const burgerQuery = 'SELECT * FROM ??';

        const [rows] = await connection.query(burgerQuery, [burgerTableName])
        return rows;
    },
    insertOne: async (burgerTableName, newBurger) => {
        const burgerQuery = `INSERT INTO ?? (burger_name) VALUES ??`;

        const [rows] = await connection.query(burgerQuery, [burgerTableName], [newBurger])
        return rows;
    },
    updateOne: async (burgerTableName, burgerID) => {
        const burgerQuery = `UPDATE ?? SET devoured = true  WHERE id = ??`;

        const [rows] = await connection.query(burgerQuery, [burgerTableName], [burgerID])
    }
};

module.exports = orm;
