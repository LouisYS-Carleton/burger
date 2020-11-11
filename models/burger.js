const orm = require('../config/orm.js')

const burgerSpecificInput = {
    selectAll: async function (burgerTableName) {
        return orm.selectAll(burgerTableName)
    },
    insertOne: async function (newBurger) {
        return orm.insertOne(newBurger)
    },
    updateOne: async function (burgerID) {
        return orm.updateOne(burgerID)
    }
};

module.exports = burgerSpecificInput