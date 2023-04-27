var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'yapapp.cpqxkffrdz0z.ap-south-1.rds.amazonaws.com',
//   user     : 'admin',
//   password : 'ItsMeBitches1!',
//   database : 'yapapp'
// });

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'yapapp'
});


connection.connect();

function getUser(userId, callback) {
  connection.query('SELECT * from users WHERE id = ?', [userId], function (error, results, fields) {
    if (error) {
      callback(error);
    } else {
      callback(results[0]);
    }
  });
}


var values = [userName, firstName, lastName, email, password];

function addUser(userId, callback) {
  connection.query("INSERT INTO users (username, firstname, lastname, email, password) VALUES (?, ?, ?, ?, ?)", values, function (error, results, fields) {
    if (error) {
      callback(error);
    } else {
      console.log("User: "+ userName +" added successfully")
      callback(results[0]);
    }
  });
}


module.exports = getUserData;


