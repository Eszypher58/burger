var mysql = require("mysql");

var connection = mysql.createConnection({

	host: "localhost",
	port: 3306,
	user: "test_user",
	password: "12345678",
	database: "burgers_db"

});

connection.connect(function(err){

	if(err) {

		return console.log(err);

	}

	console.log("Connected as " + connection.threadId);

})

module.exports = connection;