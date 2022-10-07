var mysql = require('mysql')
// 连接数据库
var dbmysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'voice_wakeup'
})

module.exports = dbmysql;