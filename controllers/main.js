const request = require('request');

function dataTables (key,table) {
  this.key = key
  this.column = []
  this.obj =
  this.table = table
  this.tableCall = function tableCall(key){

  var this1 = this
  var url =  "https://spreadsheets.google.com/feeds/list/" + key + "/od6/public/values?alt=json";

    request(url, function(err,res,body){
      var data = JSON.parse(body);
      // this is the complete object with the data
      var mdata = data.feed.entry;

      var data  = data.feed.entry[1];

      function turtle(data){
        this1.column.splice(0,6);
        console.log(this1.column);
      }

      function cb(data){
        for (key in data){
          this1.column.push(key);
        }
        return turtle()
      };
      cb(data)
      })
    }
}

module.exports = dataTables;

var quarterback = new dataTables("1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw","tablename");

quarterback.tableCall(quarterback.key);
