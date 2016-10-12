/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/
var connection = require('../config/connection.js');

function printQuestionMarks(num){
  var arr = [];

  for (var i=0; i<num; i++){
    arr.push('?')
  }

  return arr.toString();
}

function objToSql(ob){
  //column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  }

  return arr.toString();
}

var orm = {
    findOneUser: function(tableInput, condition, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result[0]);
        });
    },
    allUsers: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //vals is an array of values that we want to save to cols
    //cols are the columns we want to insert the values into
    createUser: function(table, cols, vals, cb) {
      var queryString = 'INSERT INTO ' + table;

      queryString = queryString + ' (';
      queryString = queryString + cols.toString();
      queryString = queryString + ') ';
      queryString = queryString + 'VALUES (';
      queryString = queryString + printQuestionMarks(vals.length);
      queryString = queryString + ') ';

      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    //objColVals would be the columns and values that you want to update
    //an example of objColVals would be {name: panther, sleepy: true}
    updateUser: function(table, objColVals, condition, cb) {
      var queryString = 'UPDATE ' + table;

      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

      console.log(queryString)

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    deleteUser: function(table, condition, cb){
      var queryString = 'DELETE FROM ' + table;
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    findOneFantasyData: function(tableInput, condition, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result[0]);
        });
    },
    allFantasyData: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //vals is an array of values that we want to save to cols
    //cols are the columns we want to insert the values into
    createFantasyData: function(table, cols, vals, cb) {
      var queryString = 'INSERT INTO ' + table;

      queryString = queryString + ' (';
      queryString = queryString + cols.toString();
      queryString = queryString + ') ';
      queryString = queryString + 'VALUES (';
      queryString = queryString + printQuestionMarks(vals.length);
      queryString = queryString + ') ';

      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    //objColVals would be the columns and values that you want to update
    //an example of objColVals would be {name: panther, sleepy: true}
    updateFantasyData: function(table, objColVals, condition, cb) {
      var queryString = 'UPDATE ' + table;

      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

      console.log(queryString)

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    deleteFantasyData: function(table, condition, cb){
      var queryString = 'DELETE FROM ' + table;
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    findOneNFLmatchups: function(tableInput, condition, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result[0]);
        });
    },
    findOneNews: function(tableInput, condition, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result[0]);
        });
    },
    allNews: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ' ORDER BY fantasyinfo DESC;';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //vals is an array of values that we want to save to cols
    //cols are the columns we want to insert the values into
    createNews: function(table, cols, vals, cb) {
      var queryString = 'INSERT IGNORE INTO ' + table;

      queryString = queryString + ' (';
      queryString = queryString + cols.toString();
      queryString = queryString + ') ';
      queryString = queryString + 'VALUES (';
      queryString = queryString + printQuestionMarks(vals.length);
      queryString = queryString + ') ';

      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    //objColVals would be the columns and values that you want to update
    //an example of objColVals would be {name: panther, sleepy: true}
    updateNews: function(table, objColVals, condition, cb) {
      var queryString = 'UPDATE ' + table;

      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

      console.log(queryString)

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    deleteNews: function(table, condition, cb){
      var queryString = 'DELETE FROM ' + table;
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    findOneNewsNBA: function(tableInput, condition, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result[0]);
        });
    },
    allNewsNBA: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ' ORDER BY fantasyinfo DESC;';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //vals is an array of values that we want to save to cols
    //cols are the columns we want to insert the values into
    createNewsNBA: function(table, cols, vals, cb) {
      var queryString = 'INSERT IGNORE INTO ' + table;

      queryString = queryString + ' (';
      queryString = queryString + cols.toString();
      queryString = queryString + ') ';
      queryString = queryString + 'VALUES (';
      queryString = queryString + printQuestionMarks(vals.length);
      queryString = queryString + ') ';

      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    //objColVals would be the columns and values that you want to update
    //an example of objColVals would be {name: panther, sleepy: true}
    updateNewsNBA: function(table, objColVals, condition, cb) {
      var queryString = 'UPDATE ' + table;

      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

      console.log(queryString)

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    deleteNewsNBA: function(table, condition, cb){
      var queryString = 'DELETE FROM ' + table;
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
};

module.exports = orm;
