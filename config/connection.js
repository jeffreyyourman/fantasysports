var mysql = require('mysql');
if (process.env.JAWSDB_URL){connection = mysql.createConnection(process.env.JAWSDB_URL)} else {connection = mysql.createConnection({host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",user: 'bx2ajv69tsflz7fv',password: 'bk7cnbekaw907zll',database: 'wl8zg20cpj22w77k'});}
// var connection = mysql.createConnection({
//   port: 3306,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   // password: '1123581321w',
//   database: 'fantasy'
// });
connection.connect(function(err){if (err) {console.error('error connecting: ' + err.stack);return;}console.log('connected as id ' + connection.threadId)});module.exports = connection;


// heroku restart -a wearefantasy .

// mysql -h uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com -u bx2ajv69tsflz7fv -pbk7cnbekaw907zll wl8zg20cpj22w77k < backup.sql

// mysqldump -h localhost -u root -p fantasy > backup.sql
