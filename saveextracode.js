SELECT COUNT(*) as repetitions, fantasynews FROM FantasyNews GROUP BY fantasynews HAVING repetitions > 1;


// if (process.env.JAWSDB_URL){connection = mysql.createConnection(process.env.JAWSDB_URL)} else {connection = mysql.createConnection({host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",user: 'bx2ajv69tsflz7fv',password: 'bk7cnbekaw907zll',database: 'wl8zg20cpj22w77k'});}
