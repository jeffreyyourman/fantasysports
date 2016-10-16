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
      console.log(mdata);
      var data  = data.feed.entry[1];

      function spliceFormula(data){
        this1.column.splice(0,6);

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
// var quarterback = new dataTables("1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw",".fantasyQB");
// quarterback.tableCall("1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw")

module.exports = dataTables;
