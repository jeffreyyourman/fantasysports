var mysql = require('mysql');

// if (process.env.JAWSDB_URL){connection = mysql.createConnection(process.env.JAWSDB_URL)} else {connection = mysql.createConnection({host: "tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",user: 'ih88m4x1uwvaf3o2',password: 'g46smq50w2xkadp2 ',database: 'jrtc69cpagdcwlkn'});}

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: 'bx2ajv69tsflz7fv',
        password: 'bk7cnbekaw907zll',
        database: 'wl8zg20cpj22w77k'
    });
}





// connection = mysql.createConnection({
//   port: 3306,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   // password: '1123581321w',
//   database: 'fantasynew'
// });
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId)
});
module.exports = connection;
