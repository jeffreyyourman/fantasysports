var mysql = require('mysql');
if (process.env.JAWSDB_URL){connection = mysql.createConnection(process.env.JAWSDB_URL)} else {connection = mysql.createConnection({host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",user: 'bx2ajv69tsflz7fv',password: 'bk7cnbekaw907zll',database: 'wl8zg20cpj22w77k'});}
// var connection = mysql.createConnection({
//   port: 3306,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'fantasy'
// });
connection.connect(function(err){if (err) {console.error('error connecting: ' + err.stack);return;}console.log('connected as id ' + connection.threadId)});module.exports = connection;
// heroku restart -a wearefantasy .

// mysql -h uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com -u bx2ajv69tsflz7fv -pbk7cnbekaw907zll wl8zg20cpj22w77k < backup.sql

// mysqldump -h localhost -u root -p fantasy > backup.sql

//  delete t2 from fantasynewsnba t1 join fantasynewsnba t2 on (t2.fantasynews = t1.fantasynews and t2.fantasyid > t1.fantasyid);

// https://fantasydata.com/rss/rotoworld/?format=json

// SELECT * FROM fantasynewsnba ORDER BY fantasyinfo DESC;
