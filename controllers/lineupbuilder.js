var request = require("request");
var cheerio = require('cheerio');
var dateFormat = require('dateformat');

//database below this
var user = require('../model/userdata.js');
var fanduel = require('../model/fanduelinfo.js');
var connection = require('../config/connection.js');

var moment = require('moment-timezone');

var linebuilderexport = function() {
  var lineupbuilderQuery = function() {
    var dropAllTablesGFY = 'DROP TABLE IF EXISTS LINEUP;';
    var dropAllTablesLineup = 'DROP TABLE IF EXISTS GFY;';
    var dropAllTablesPG1 = 'DROP TABLE IF EXISTS PG1;';
    var dropAllTablesPG2 = 'DROP TABLE IF EXISTS PG2;';
    var dropAllTablesSG1 = 'DROP TABLE IF EXISTS SG1;';
    var dropAllTablesSG2 = 'DROP TABLE IF EXISTS SG2;';
    var dropAllTablesSF1 = 'DROP TABLE IF EXISTS SF1;';
    var dropAllTablesSF2 = 'DROP TABLE IF EXISTS SF2;';
    var dropAllTablesPF1 = 'DROP TABLE IF EXISTS PF1;';
    var dropAllTablesPF2 = 'DROP TABLE IF EXISTS PF2;';
    var dropAllTablesC = 'DROP TABLE IF EXISTS C;';

    var dropAllTables = "DROP TABLE IF EXISTS LINEUP; DROP TABLE IF EXISTS GFY; DROP TABLE IF EXISTS PG1; DROP TABLE IF EXISTS PG2; DROP TABLE IF EXISTS SG1; DROP TABLE IF EXISTS SG2; DROP TABLE IF EXISTS SF1; DROP TABLE IF EXISTS SF2; DROP TABLE IF EXISTS PF1; DROP TABLE IF EXISTS PF2; DROP TABLE IF EXISTS C;";
    var createGFY = "create temporary table GFY as SELECT * FROM googlesheetsapi WHERE Player <> '' AND SalaryAdjust BETWEEN -580 AND 800 AND RecPr < 25 AND ProjMins >= 21 AND Useage >= .1;";

    var temptablePG1 = "create temporary table PG1 as SELECT * FROM GFY WHERE Position = 'PG' AND CriteriaRanking >=4 AND Salary >= 6200 ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

    var temptablePG2 = "create temporary table PG2 as SELECT * FROM GFY WHERE Position = 'PG' AND CriteriaRanking >=4 AND Salary BETWEEN 3700 AND 7000 ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

    var temptableSG1 = "create temporary table SG1 as SELECT * FROM GFY WHERE Position = 'SG' AND CriteriaRanking >=4 AND Salary >= 6200 ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

    var temptableSG2 = "create temporary table SG2 as SELECT * FROM GFY WHERE Position = 'SG' AND CriteriaRanking >=4 AND Salary BETWEEN 3700 AND 7500 ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

    var temptableSF1 = "create temporary table SF1 as SELECT * FROM GFY WHERE Position = 'SF' AND CriteriaRanking >=4 AND Salary >= 6000 ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

    var temptableSF2 = "create temporary table SF2 as SELECT * FROM GFY WHERE Position = 'SF' AND CriteriaRanking >=4 AND Salary BETWEEN 3700 AND 7700 ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

    var tembtablePF1 = "create temporary table PF1 as SELECT * FROM GFY WHERE Position = 'PF' AND CriteriaRanking >=4 AND Salary >= 4300 ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

    var tembtablePF2 = "create temporary table PF2 as SELECT * FROM GFY WHERE Position = 'PF' AND CriteriaRanking >=4 AND Salary BETWEEN 3700 AND 7200 ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

    var temptableC = "create temporary table C as SELECT * FROM GFY WHERE Position = 'C' AND CriteriaRanking >=4 AND Salary >= 3500 ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

    var lineupbuilderQuery = "create temporary table LINEUP as SELECT PG1.Player as 'PG1', PG2.Player as 'PG2', SG1.Player as 'SG1', SG2.Player as 'SG2', SF1.Player as 'SF1', SF2.Player as 'SF2', PF1.Player as 'PF1', PF2.Player as 'PF2', C.Player as 'C', (PG1.ProjectedPts + PG2.ProjectedPts + SG1.ProjectedPts + SG2.ProjectedPts + SF1.ProjectedPts + SF2.ProjectedPts + PF1.ProjectedPts + PF2.ProjectedPts + C.ProjectedPts) as 'Total_Fantasy_PointsProjected', (PG1.Salary + PG2.Salary + SG1.Salary + SG2.Salary + SF1.Salary + SF2.Salary + PF1.Salary + PF2.Salary + C.Salary) as 'Sal', (PG1.ProjMins + PG2.ProjMins + SG1.ProjMins + SG2.ProjMins + SF1.ProjMins + SF2.ProjMins + PF1.ProjMins + PF2.ProjMins + C.ProjMins)/9 as 'Projected_Mins', (PG1.Value + PG2.Value + SG1.Value + SG2.Value + SF1.Value + SF2.Value + PF1.Value + PF2.Value + C.Value)/9 as 'Value', (PG1.Useage + PG2.Useage + SG1.Useage + SG2.Useage + SF1.Useage + SF2.Useage + PF1.Useage + PF2.Useage + C.Useage)/9 as 'Useage', (PG1.OVP + PG2.OVP + SG1.OVP + SG2.OVP + SF1.OVP + SF2.OVP + PF1.OVP + PF2.OVP + C.OVP)/9 as 'OVP', (PG1.GameLine + PG2.GameLine + SG1.GameLine + SG2.GameLine + SF1.GameLine + SF2.GameLine + PF1.GameLine + PF2.GameLine + C.GameLine)/9 as 'Avg_Total_Game_Score', (PG1.CriteriaRanking + PG2.CriteriaRanking + SG1.CriteriaRanking + SG2.CriteriaRanking + SF1.CriteriaRanking + SF2.CriteriaRanking + PF1.CriteriaRanking + PF2.CriteriaRanking + C.CriteriaRanking) as 'CriteriaRanking', (PG1.ProjScore + PG2.ProjScore + SG1.ProjScore + SG2.ProjScore + SF1.ProjScore + SF2.ProjScore + PF1.ProjScore + PF2.ProjScore + C.ProjScore)/9 as 'TotalProjScore', (PG1.PTsVPos + PG2.PTsVPos + SG1.PTsVPos + SG2.PTsVPos + SF1.PTsVPos + SF2.PTsVPos + PF1.PTsVPos + PF2.PTsVPos + C.PTsVPos)/9 as 'PointsVsPosition' FROM PG1, PG2, SG1, SG2, SF1, SF2, PF1, PF2, C WHERE PG1.Salary >= PG2.Salary AND SG1.Salary >= SG2.Salary AND SF1.Salary >= SF2.Salary AND PF1.Salary >= PF2.Salary  AND PG1.Player <> PG2.Player AND SG1.Player <> SG2.player AND SF1.Player <> SF2.Player AND PF1.Player <> PF2.Player AND (SELECT(PG1.Salary + PG2.Salary + SG1.Salary + SG2.Salary + SF1.Salary + SF2.Salary + PF1.Salary + PF2.Salary + C.Salary)) BETWEEN 59600 AND 60000 AND (SELECT(PG1.Useage + PG2.Useage + SG1.Useage + SG2.Useage + SF1.Useage + SF2.Useage + PF1.Useage + PF2.Useage + C.Useage)/9) >= .23 AND (SELECT(PG1.ProjMins + PG2.ProjMins + SG1.ProjMins + SG2.ProjMins + SF1.ProjMins + SF2.ProjMins + PF1.ProjMins + PF2.ProjMins + C.ProjMins)/9)  >= 31 AND (SELECT(PG1.CriteriaRanking + PG2.CriteriaRanking + SG1.CriteriaRanking + SG2.CriteriaRanking + SF1.CriteriaRanking + SF2.CriteriaRanking + PF1.CriteriaRanking + PF2.CriteriaRanking + C.CriteriaRanking)) BETWEEN 5 AND 56 AND (SELECT(PG1.ProjScore + PG2.ProjScore + SG1.ProjScore + SG2.ProjScore + SF1.ProjScore + SF2.ProjScore + PF1.ProjScore +PF2.ProjScore + C.ProjScore)/9) >= 103 AND (SELECT(PG1.PTsVPos + PG2.PTsVPos + SG1.PTsVPos + SG2.PTsVPos + SF1.PTsVPos + SF2.PTsVPos + PF1.PTsVPos +PF2.PTsVPos + C.PTsVPos)/9) >= 22 AND (SELECT(PG1.ProjectedPts + PG2.ProjectedPts + SG1.ProjectedPts + SG2.ProjectedPts + SF1.ProjectedPts + SF2.ProjectedPts + PF1.ProjectedPts + PF2.ProjectedPts + C.ProjectedPts)) >= 240 GROUP BY PG1.ProjectedPts , PG2.ProjectedPts , SG1.ProjectedPts , SG2.ProjectedPts , SF1.ProjectedPts , SF2.ProjectedPts , PF1.ProjectedPts , PF2.ProjectedPts , C.ProjectedPts, PG1.CriteriaRanking , PG2.CriteriaRanking , SG1.CriteriaRanking , SG2.CriteriaRanking , SF1.CriteriaRanking , SF2.CriteriaRanking , PF1.CriteriaRanking , PF2.CriteriaRanking , C.CriteriaRanking, PG1.Salary , PG2.Salary , SG1.Salary , SG2.Salary , SF1.Salary , SF2.Salary , PF1.Salary , PF2.Salary , C.Salary, PG1.Player, PG2.Player, SG1.Player, SG2.Player, SF1.Player, SF2.Player, PF1.Player, PF2.Player, C.Player, PG1.ProjectedPts , PG2.ProjectedPts , SG1.ProjectedPts , SG2.ProjectedPts , SF1.ProjectedPts , SF2.ProjectedPts , PF1.ProjectedPts , PF2.ProjectedPts , C.ProjectedPts, PG1.Useage , PG2.Useage , SG1.Useage , SG2.Useage , SF1.Useage , SF2.Useage , PF1.Useage , PF2.Useage , C.Useage, PG1.ProjMins , PG2.ProjMins , SG1.ProjMins , SG2.ProjMins , SF1.ProjMins , SF2.ProjMins , PF1.ProjMins , PF2.ProjMins , C.ProjMins, PG1.Value , PG2.Value , SG1.Value , SG2.Value , SF1.Value , SF2.Value , PF1.Value , PF2.Value , C.Value, PG1.Useage , PG2.Useage , SG1.Useage , SG2.Useage , SF1.Useage , SF2.Useage , PF1.Useage , PF2.Useage , C.Useage, PG1.OVP , PG2.OVP , SG1.OVP , SG2.OVP , SF1.OVP , SF2.OVP , PF1.OVP , PF2.OVP , C.OVP, PG1.GameLine , PG2.GameLine , SG1.GameLine , SG2.GameLine , SF1.GameLine , SF2.GameLine , PF1.GameLine , PF2.GameLine , C.GameLine, PG1.ProjScore ,PG2.ProjScore , SG1.ProjScore , SG2.ProjScore , SF1.ProjScore , SF2.ProjScore , PF1.ProjScore , PF2.ProjScore , C.ProjScore, PG1.PTsVPos ,PG2.PTsVPos , SG1.PTsVPos , SG2.PTsVPos , SF1.PTsVPos , SF2.PTsVPos , PF1.PTsVPos , PF2.PTsVPos , C.PTsVPos, PG1.Team , PG2.Team , SG1.Team , SG2.Team , SF1.Team , SF2.Team , PF1.Team , PF2.Team , C.Team ORDER BY Projected_Mins DESC, CriteriaRanking, Useage, Total_Fantasy_PointsProjected DESC, TotalProjScore DESC;"
    connection.query(dropAllTablesGFY, function(err, dropAllTablesGFYQuery) {
        if (err) throw err;
        console.log(dropAllTablesGFYQuery);
    })
    connection.query(dropAllTablesLineup, function(err, dropAllTablesLineupQuery) {
        if (err) throw err;
        console.log(dropAllTablesLineupQuery);
    })
    connection.query(dropAllTablesPG1, function(err, dropAllTablesPG1Query) {
        if (err) throw err;
        console.log(dropAllTablesPG1Query);
    })
    connection.query(dropAllTablesPG2, function(err, dropAllTablesPG2Query) {
        if (err) throw err;
        console.log(dropAllTablesPG2Query);
    })
    connection.query(dropAllTablesSG1, function(err, dropAllTablesSG1Query) {
        if (err) throw err;
        console.log(dropAllTablesSG1Query);
    })
    connection.query(dropAllTablesSG2, function(err, dropAllTablesSG2Query) {
        if (err) throw err;
        console.log(dropAllTablesSG2Query);
    })
    connection.query(dropAllTablesSF1, function(err, dropAllTablesSF1Query) {
        if (err) throw err;
        console.log(dropAllTablesSF1Query);
    })
    connection.query(dropAllTablesSF2, function(err, dropAllTablesSF2Query) {
        if (err) throw err;
        console.log(dropAllTablesSF2Query);
    })
    connection.query(dropAllTablesPF1, function(err, dropAllTablesPF1Query) {
        if (err) throw err;
        console.log(dropAllTablesPF1Query);
    })
    connection.query(dropAllTablesPF2, function(err, dropAllTablesPF2Query) {
        if (err) throw err;
        console.log(dropAllTablesPF2Query);
    })
    connection.query(dropAllTablesC, function(err, dropAllTablesCQuery) {
        if (err) throw err;
        console.log(dropAllTablesCQuery);
    })
    connection.query(createGFY, function(err, fanduelbuilder1) {
        if (err) throw err;
        console.log(fanduelbuilder1);
    })
    connection.query(temptablePG1, function(err, fanduelbuilder) {
        if (err) throw err;
        console.log(fanduelbuilder);
    })
    connection.query(temptablePG2, function(err, fanduelbuilderPG2) {
        if (err) throw err;

        console.log(fanduelbuilderPG2);
    })
    connection.query(temptableSG1, function(err, fanduelbuilderSG1) {
        if (err) throw err;

        console.log(fanduelbuilderSG1);
    })
    connection.query(temptableSG2, function(err, fanduelbuilderSG2) {
        if (err) throw err;

        console.log(fanduelbuilderSG2);
    })
    connection.query(temptableSF1, function(err, fanduelbuilderSF1) {
        if (err) throw err;

        console.log(fanduelbuilderSF1);
    })
    connection.query(temptableSF2, function(err, fanduelbuilderSF2) {
        if (err) throw err;

        console.log(fanduelbuilderSF2);
    })
    connection.query(tembtablePF1, function(err, fanduelbuilderPF1) {
        if (err) throw err;

        console.log(fanduelbuilderPF1);
    })
    connection.query(tembtablePF2, function(err, fanduelbuilderPF2) {
        if (err) throw err;

        console.log(fanduelbuilderPF2);
    })
    connection.query(temptableC, function(err, fanduelbuilderC) {
        if (err) throw err;

        console.log(fanduelbuilderC);
    })

    connection.query(lineupbuilderQuery, function(err, lineupbuilderQuery1) {
        if (err) throw err;

        console.log(lineupbuilderQuery1);
    })
    var lineupbuilderQuery = "select * from LINEUP ORDER BY Total_Fantasy_PointsProjected desc limit 1;";
    connection.query(lineupbuilderQuery, function(err, lineupbuilderQuery1) {
        if (err) throw err;
        console.log('===============');
        console.log(lineupbuilderQuery1);
    })
  }
  lineupbuilderQuery();
}
module.exports = linebuilderexport;
