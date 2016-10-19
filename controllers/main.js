const request = require('request');

function dataTables (key,table) {
  this.key = key
  this.column = []
  this.obj = {}
  this.table = table
  this.displayData = function(){
    db = {column: this.column, db:this.obj,table:this.table }
    console.log("hi");
    return db
  }
  this.tableCall = function(){

  var this1 = this
  var url =  "https://spreadsheets.google.com/feeds/list/" + this.key + "/od6/public/values?alt=json";

    request(url, function(err,res,body){
      if (err) throw err;

      var data = JSON.parse(body);
      this1.obj = data.feed.entry;
      var data  = data.feed.entry[1];

      function spliceFormula(){
        this1.column.splice(0,6);
        console.log("runnning");
        return this1.displayData();
      }
      function pushToColumn(data){
        for (key in data){
          this1.column.push(key);
        }
        return spliceFormula()
      };
      pushToColumn(data);
      })
    }
}
// var quarterback = new dataTables("1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw",".fantasyQB");
// quarterback.tableCall("1VTZtc8vRucqAHVO-7ACCMe1sm3vl5NC9DLtDuh622Jw")

module.exports = dataTables;
