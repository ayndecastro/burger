let mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
	
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	
	connection = mysql.createConnection({
		port: 3306,
		host: 'us-cdbr-iron-east-01.cleardb.net',
		user: 'ba76b836b662f5',
		password: 'fbb9dbf3',
		database: 'burgers_db'
	})
};
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;