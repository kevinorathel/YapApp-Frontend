var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'yapapp'
})

connection.connect();

connection.query('SELECT * from msgqueue WHERE id = 1', function (error, results, fields) {
    if (error){
        console.log("Error: ", error);
    }
    else{
        console.log('The solution is: ', results);
    }
});