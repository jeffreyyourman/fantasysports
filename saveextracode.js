// request(url, function (error, response, html) {
//
// // console.log('my name is tim',html);
//   var $ = cheerio.load(html);
//
//   var name,time,title,injuryreport;
//   // var json = {playernameandteam: '', time: '', playerreport: ''};
//   var json = {playernameandteam: ''};
//
//     $('div.latest-updates').filter(function(i, element){
//
//       var player = $(this);
//       playernameandteam = player.text();
//
//       json.playernameandteam = playernameandteam;
//       var jsonplayername = json.playernameandteam
//       console.log('playernameandteam log', json.playernameandteam);
//
//       if (jsonplayername) {
//         db.fantasynews.save({
//           jsonplayername:jsonplayername
//
//         }, function(err,saved){
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(saved);
//           }
//         });
//       }
//   });
// });
//
// request(url2, function (error, response, html) {
// // console.log('my name is tim',html);
// var $ = cheerio.load(html);
//
// var name,time,title,injuryreport;
// // var json = {playernameandteam: '', time: '', playerreport: ''};
// var json = {playernameandteam: ''};
//
//   $('div.latest-updates').filter(function(i, element){
//
//     var player = $(this);
//     playernameandteam = player.text();
//
//     json.playernameandteam = playernameandteam;
//     var jsonplayername = json.playernameandteam
//     // console.log('playernameandteam log', json.playernameandteam);
//
//     if (jsonplayername) {
//       db.fantasynews.save({
//         jsonplayername:jsonplayername
//
//
//       }, function(err,saved){
//         if (err) {
//           // console.log('timmy');
//           console.log(err);
//         } else {
//           // console.log('jason');
//           console.log(saved);
//         }
//       });
//     }
// });
// });



// ========== how to delete duplicates below =======


// var duplicates = [];
//
// // db.fantasynews.aggregate([
// //   { $match: {
// //     name: { "$ne": '' }
// //   }},
// //   { $group: {
// //     _id: { name: "$jsonplayername"},
// //     dups: { "$addToSet": "$_id" },
// //     count: { "$sum": 1 }
// //   }},
// //   { $match: {
// //     count: { "$gt": 1 }
// //   }}
// // ])
// // .result
// // .forEach(function(doc) {
// //     doc.dups.shift();
// //     doc.dups.forEach( function(dupId){
// //         duplicates.push(dupId);
// //         }
// //     )
// // })
// //
// // printjson(duplicates);
// //
// // db.fantasynews.remove({_id:{$in:duplicates}})
//
//
//
//
// // ================= original for duplicates below
// // var duplicates = [];
// //
// // db.collectionName.aggregate([
// //   { $match: {
// //     name: { "$ne": '' }  // discard selection criteria
// //   }},
// //   { $group: {
// //     _id: { name: "$name"}, // can be grouped on multiple properties
// //     dups: { "$addToSet": "$_id" },
// //     count: { "$sum": 1 }
// //   }},
// //   { $match: {
// //     count: { "$gt": 1 }    // Duplicates considered as count greater than one
// //   }}
// // ])               // You can display result until this and check duplicates
// // // If your result getting response in "result" then use else don't use ".result" in query
// // .result
// // .forEach(function(doc) {
// //     doc.dups.shift();      // First element skipped for deleting
// //     doc.dups.forEach( function(dupId){
// //         duplicates.push(dupId);   // Getting all duplicate ids
// //         }
// //     )
// // })
// //
// // // If you want to Check all "_id" which you are deleting else print statement not needed
// // printjson(duplicates);
// //
// // // Remove all duplicates in one go
// // db.collectionName.remove({_id:{$in:duplicates}})




<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div class="panel-body">
        <div class="table-responsive">
          <table class="table table-bordered table-hover table-striped">
            <thead>
              <tr style='font-size:10px;'>
                <th>Week</th>
                <th>Player</th>
                <th>Salary</th>
                <th>Position</th>
                <th>Team</th>
                <th>Team Name</th>
                <th>ID</th>
                <th>Injury Status</th>
                <th>Type of Injury</th>
                <th>RvP</th>
                <th>PR</th>
                <th>OPP Def Rank</th>
                <th>FPPG</th>
                <th>Pass Attempt pg</th>
                <th>Rush Attempt pg</th>
                <th>TotalOpp</th>
                <th>PPA</th>
                <th>DOVA</th>
                <th>Expected Wins</th>
                <th>Path Expectation</th>
                <th>O/U</th>
                <th>ML</th>
                <th>SL</th>
                <th>Ending ML</th>
                <th>Line Change</th>
                <th>Sal Change</th>
                <th>OL Rank</th>
                <th>Prating</th>
                <th>Criteria Score</th>
                <th>Criteria Rank</th>
                <th>Fantasy Points Score</th>
              </tr>
            </thead>
            <tbody>
              {{#each fantasydataQB}}
                <tr style='font-size:10px;'>
                  <td>{{this.Week}}</td>
                  <td>{{this.Player}}</td>
                  <td>{{this.Sal}}</td>
                  <td>{{this.POS}}</td>
                  <td>{{this.Team}}</td>
                  <td>{{this.Team_Name}}</td>
                  <td>{{this.ID}}</td>
                  <td>{{this.Injury_Status}}</td>
                  <td>{{this.Type_Injury}}</td>
                  <td>{{this.RvP}}</td>
                  <td>{{this.PR}}</td>
                  <td>{{this.OPP_DEF_RANK}}</td>
                  <td>{{this.FPPG}}</td>
                  <td>{{this.PassAttempt_Game}}</td>
                  <td>{{this.RUSHAtt_Game}}</td>
                  <td>{{this.TotalOpp}}</td>
                  <td>{{this.PPA}}</td>
                  <td>{{this.DOVA}}</td>
                  <td>{{this.Expected_Wins}}</td>
                  <td>{{this.Path_Expectation}}</td>
                  <td>{{this.O_U}}</td>
                  <td>{{this.ML}}</td>
                  <td>{{this.SL}}</td>
                  <td>{{this.Ending_ML}}</td>
                  <td>{{this.Line_Change}}</td>
                  <td>{{this.Sal_Change}}</td>
                  <td>{{this.OL_RANK}}</td>
                  <td>{{this.Prating}}</td>
                  <td>{{this.CriteriaScore}}</td>
                  <td>{{this.CritRank}}</td>
                  <td>{{this.FPS}}</td>
                </tr>
                {{/each}}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>


=====running back below

<div id='runningback' class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div class="panel-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr style='font-size:10px;'>
                <th>Week</th>
                <th>Player</th>
                <th>Salary</th>
                <th>Position</th>
                <th>Team</th>
                <th>Team Name</th>
                <th>Injury Status</th>
                <th>Type of Injury</th>
                <th>Spread</th>
                <th>RvP</th>
                <th>PR</th>
                <th>Points Per Game</th>
                <th>Rush Attempt per game</th>
                <th>Receiving Target</th>
                <th>Total Opposition</th>
                <th>PPA</th>
                <th>R Dova</th>
                <th>Expected Wins</th>
                <th>Path Expectation</th>
                <th>O/U</th>
                <th>ML</th>
                <th>SL</th>
                <th>Ending ML</th>
                <th>Line Change</th>
                <th>Salary Change</th>
                <th>PRating</th>
                <th>Snap Count</th>
                <th>OFL Rating</th>
                <th>CriteriaScore</th>
                <th>CritRank</th>
                <th>FPS</th>
              </tr>
            </thead>
            <tbody>
              {{#each fantasydataQB}}
                <tr style='font-size:10px;'>
                  <td>{{this.Week}}</td>
                  <td>{{this.Player}}</td>
                  <td>{{this.Sal}}</td>
                  <td>{{this.POS}}</td>
                  <td>{{this.Team}}</td>
                  <td>{{this.Team_Name}}</td>
                  <td>{{this.Injury_Status}}</td>
                  <td>{{this.Type_Injury}}</td>
                  <td>{{this.Spread}}</td>
                  <td>{{this.RvP}}</td>
                  <td>{{this.PR}}</td>
                  <td>{{this.PPG}}</td>
                  <td>{{this.RUSHAtt_Game}}</td>
                  <td>{{this.Rec_Targ}}</td>
                  <td>{{this.TotalOpp}}</td>
                  <td>{{this.PPA}}</td>
                  <td>{{this.R_DOVA}}</td>
                  <td>{{this.Expected_Wins}}</td>
                  <td>{{this.Path_Expectation}}</td>
                  <td>{{this.O_U}}</td>
                  <td>{{this.ML}}</td>
                  <td>{{this.SL}}</td>
                  <td>{{this.Ending_ML}}</td>
                  <td>{{this.Line_Change}}</td>
                  <td>{{this.Sal_Change}}</td>
                  <td>{{this.PRating}}</td>
                  <td>{{this.Snap_Count}}</td>
                  <td>{{this.OFL_RATING}}</td>
                  <td>{{this.CriteriaScore}}</td>
                  <td>{{this.CritRank}}</td>
                  <td>{{this.FPS}}</td>
                </tr>
                {{/each}}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
