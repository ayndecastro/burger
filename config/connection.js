let mysql = require('mysql');

	let connection = mysql.createConnection({
		port: process.env.port || 3306,
		host: '	jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'l5uxrqpwzylzjp53',
		password: 'efzmnm2ehy2itltl',
		database: 'e6adsamx1qvoy295'
	})

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;