const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Marlboro3!',
    database: 'blog_ricette'
})

connection.connect((err) => {
    if (err) throw err
    console.log('connesso al database')
})

module.exports = connection