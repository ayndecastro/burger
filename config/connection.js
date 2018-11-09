const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    PORT: 8000,
    user: "root",
    password: "password",
    database: "burgers_db"
});


// make connection
connection.connect(function(err) {
    if(err){
        console.log("error connection: " +err.stack);
        return;
    } console.log("connected as id: " + connection.threadId);
});

module.exports = connection;