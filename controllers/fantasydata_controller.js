var express = require('express');
var router = express.Router();
var dataTables = require('./DataTable.js');


//connection to model files
var userdata = require('../model/userdata.js');
var fantasydata = require('../model/fantasytables.js');

//connection to database;
var connection = require('../config/connection.js');

router.get('/tables', function(req,res){

var quarterback = new dataTables("1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw", ".fantasyQB");

  quarterback.tableCall()

  setTimeout(function(){
    y = quarterback.displayData()
    res.json(y)
  },1000)


});



module.exports = router;
