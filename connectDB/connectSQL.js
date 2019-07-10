const mysql = require('mysql2');
const {sql} = require('../config/development');

const sqlConnect = () => {
    console.log(sql);
    this.connection = mysql.createConnection(sql);

    this.connection.connect(function(err){
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else{
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
}
module.exports = sqlConnect;