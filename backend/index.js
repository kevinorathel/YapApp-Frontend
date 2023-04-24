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

function getUserData(userId, callback) {
  connection.query('SELECT * from users WHERE id = ?', [userId], function (error, results, fields) {
    if (error) {
      callback(error);
    } else {
      callback(results[0]);
    }
  });
}

module.exports = getUserData;


