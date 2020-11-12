const orm = require('../config/orm.js')

const burgerSpecificInput = {
    selectAll: async function (burgerTableName) {
        return orm.selectAll(burgerTableName)
    },
    insertOne: async function (burgerTableName, newBurger, status) {
        return orm.insertOne(burgerTableName, newBurger, status)
    },
    updateOne: async function (burgerID) {
        return orm.updateOne(burgerID)
    }
};

module.exports = burgerSpecificInput