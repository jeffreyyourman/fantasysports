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
// db.fantasynews.aggregate([
//   { $match: {
//     name: { "$ne": '' }
//   }},
//   { $group: {
//     _id: { name: "$jsonplayername"},
//     dups: { "$addToSet": "$_id" },
//     count: { "$sum": 1 }
//   }},
//   { $match: {
//     count: { "$gt": 1 }
//   }}
// ])
// .result
// .forEach(function(doc) {
//     doc.dups.shift();
//     doc.dups.forEach( function(dupId){
//         duplicates.push(dupId);
//         }
//     )
// })
//
// printjson(duplicates);
//
// db.fantasynews.remove({_id:{$in:duplicates}})
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


// if (process.env.JAWSDB_URL){connection = mysql.createConnection(process.env.JAWSDB_URL)} else {connection = mysql.createConnection({host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",user: 'bx2ajv69tsflz7fv',password: 'bk7cnbekaw907zll',database: 'wl8zg20cpj22w77k'});}

// exports.twitterKeys = {consumer_key: 'sVBog6lkx26rWClP80EMs561I',consumer_secret: 'NT29haSVTyY3q3XuKbyCBVBhREUkkQAOxHw2cEXIkzYoQ5itTT',access_token_key: '2894209034-togiMyQKNk0RorflmDLicfn1WKnUHWeY2we5cvV',access_token_secret: '3W8FNYbgUbdmfD6XtD3HoasenqSBSvH0AZXNy1FpJYFkn'}
