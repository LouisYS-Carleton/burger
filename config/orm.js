const db = require('./connection.js')

function selectAll(){
    db.createQuery('SELECT *')
}

function insertOne(){
    db.createQuery('INSERT ? FROM ?')
}

function updateOne(){
    db.createQuery('UPDATE ? FROM ?')
}

module.exports = {selectAll, insertOne, updateOne}
// let orm = () => {
//     let selectAll(db.createQuery('SELECT *'))
//     let insertOne(db.createQuery('INSERT ? FROM ?'))
//     let updateOne(db.)
// }