const request = require('request');

function dataTables (key,table) {
  this.key = key
  this.column = []
  this.obj = {}
  this.table = table
  this.tableCall = function tableCall(key){

  var this1 = this
  var url =  "https://spreadsheets.google.com/feeds/list/" + key + "/od6/public/values?alt=json";

    request(url, function(err,res,body){
      var data = JSON.parse(body);
      var mdata = data.feed.entry;
      this1.obj = mdata

      var data  = data.feed.entry[1];

      function spliceFormula(data){
        this1.column.splice(0,6);
        console.log(this1.obj);
      }

      function pushToColumn(data){
        for (key in data){
          this1.column.push(key);
        }
        return spliceFormula()
      };
      pushToColumn(data)
      })
    }
}

module.exports = dataTables;

var quarterback = new dataTables("1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw",".fantasyQB");

console.log(quarterback);
