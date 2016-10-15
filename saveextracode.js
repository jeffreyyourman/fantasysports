
// SELECT DISTINCT fantasynews FROM FantasyNews;


// if (process.env.JAWSDB_URL){connection = mysql.createConnection(process.env.JAWSDB_URL)} else {connection = mysql.createConnection({host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",user: 'bx2ajv69tsflz7fv',password: 'bk7cnbekaw907zll',database: 'wl8zg20cpj22w77k'});}
<br>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-8 matchupdiv">
      <div class="table-responsive">
          <table class="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>Away Team</th>
                <th>Home Team</th>
                <th>Weather</th>
                <th>Total Points</th>
                <th>Suggested Winner</th>
              </tr>
            </thead>
            <tbody>
            {{#each allNFLmatchups}}
              <tr>
                <td>{{this.awayteam}}</td>
                <td>{{this.hometeam}}</td>
                <td>{{this.weather}}</td>
                <td>{{this.totalpoint}}</td>
                <td>Jets by {{this.spread}}</td>
              </tr>
            {{/each}}
            </tbody>
          </table>
        </div>
    </div>
    <div class="col-md-4">
      <h2>Fantasy Suggestions</h2>
      <h4>Jets going against terrible defense</h4>
      <h4>Brandon marshall is on fire</h4>
      <h4>Tom brady will be back and ready to go!</h4>
    </div>
  </div>
</div>

<br>

<div class="container-fluid">
  <div class="row list">
    <div class="col-md-2">
      <li><a id='qbLink' href="/NFL/QB">Quarter Back</a></li>
    </div>
    <div class="col-md-2">
      <li><a id='rbLink' href="/NFL/RB">Running Back</a></li>
    </div>
    <div class="col-md-2">
      <li><a id='wrLink' href="/NFL/WR">Wide Receiver</a></li>
    </div>
    <div class="col-md-2">
      <li><a id='teLink' href="/NFL/TE">Tight End</a></li>
    </div>
    <div class="col-md-2">
      <li><a id='kLink' href="/NFL/K">Kicker</a></li>
    </div>
    <div class="col-md-2">
      <li><a id='defLink' href="/NFL/Def">Defense</a></li>
    </div>
  </div>
</div>

{{#if fantasydataWR}}
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
                <th>Team Name</th>
                <th>Injury Status</th>
                <th>Type of Injury</th>
                <th>Spread</th>
                <th>Rank vs Position</th>
                <th>Player Rating</th>
                <th>Points Per Game</th>
                <th>Rush Attempt per game</th>
                <th>Receiving Targets</th>
                <th>Catches Per Game</th>
                <th>Total Opposition</th>
                <th>Points Per Attempt</th>
                <th>Expected Wins</th>
                <th>Over/Under</th>
                <th>Salary Change</th>
                <th>Snap Count</th>
                <th>Fantasy Player Score</th>
              </tr>
            </thead>
            <tbody>
              {{#each fantasydataWR}}
                <tr style='font-size:10px;'>
                  <td>{{this.Week}}</td>
                  <td>{{this.Player}}</td>
                  <td>{{this.Sal}}</td>
                  <td>{{this.POS}}</td>
                  <td>{{this.Team_Name}}</td>
                  <td>{{this.Injury_Status}}</td>
                  <td>{{this.Type_Injury}}</td>
                  <td>{{this.Spread}}</td>
                  <td>{{this.RvP}}</td>
                  <td>{{this.PR}}</td>
                  <td>{{this.PPG}}</td>
                  <td>{{this.RUSHAtt_Game}}</td>
                  <td>{{this.Rec_Targ}}</td>
                  <td>{{this.Recs}}</td>
                  <td>{{this.TotalOpp}}</td>
                  <td>{{this.PPA}}</td>
                  <td>{{this.Expected_Wins}}</td>
                  <td>{{this.O_U}}</td>
                  <td>{{this.Sal_Change}}</td>
                  <td>{{this.Snap_Count}}</td>
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
{{/if}}

{{#if fantasydataTE}}
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
                <th>Team Name</th>
                <th>Injury Status</th>
                <th>Type of Injury</th>
                <th>Spread</th>
                <th>QB Score</th>
                <th>Rank vs Position</th>
                <th>Player Rating</th>
                <th>Points Per Game</th>
                <th>Rush Attempt per game</th>
                <th>Receiving Target</th>
                <th>Total Opposition</th>
                <th>Points Per Attempt</th>
                <th>Expected Wins</th>
                <th>Over/Under</th>
                <th>Salary Change</th>
                <th>Snap Count</th>
                <th>OFL Rating</th>
                <th>Fantasy Player Score</th>
              </tr>
            </thead>
            <tbody>
              {{#each fantasydataTE}}
                <tr style='font-size:10px;'>
                  <td>{{this.Week}}</td>
                  <td>{{this.Player}}</td>
                  <td>{{this.Sal}}</td>
                  <td>{{this.POS}}</td>
                  <td>{{this.Team_Name}}</td>
                  <td>{{this.Injury_Status}}</td>
                  <td>{{this.Type_Injury}}</td>
                  <td>{{this.Spread}}</td>
                  <td>{{this.QB_Score}}</td>
                  <td>{{this.RvP}}</td>
                  <td>{{this.PR}}</td>
                  <td>{{this.PPG}}</td>
                  <td>{{this.RUSHAtt_Game}}</td>
                  <td>{{this.Rec_Targ}}</td>
                  <td>{{this.TotalOpp}}</td>
                  <td>{{this.PPA}}</td>
                  <td>{{this.Expected_Wins}}</td>
                  <td>{{this.O_U}}</td>
                  <td>{{this.Sal_Change}}</td>
                  <td>{{this.Snap_Count}}</td>
                  <td>{{this.OFL_RATING}}</td>
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
{{/if}}

{{#if fantasydataK}}
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
                <th>Team Name</th>
                <th>Injury Status</th>
                <th>Type of Injury</th>
                <th>Rank vs Position</th>
                <th>Player Rating</th>
                <th>Points Per Game</th>
                <th>Total Opposition</th>
                <th>Point Per Kick</th>
                <th>Expected Wins</th>
                <th>Path Expectation</th>
                <th>Over/Under</th>
                <th>Salary Change</th>
                <th>Fantasy Player Score</th>
              </tr>
            </thead>
            <tbody>
              {{#each fantasydataK}}
                <tr style='font-size:10px;'>
                  <td>{{this.Week}}</td>
                  <td>{{this.Player}}</td>
                  <td>{{this.Sal}}</td>
                  <td>{{this.POS}}</td>
                  <td>{{this.Team_Name}}</td>
                  <td>{{this.Injury_Status}}</td>
                  <td>{{this.Type_Injury}}</td>
                  <td>{{this.RvP}}</td>
                  <td>{{this.PR}}</td>
                  <td>{{this.PPG}}</td>
                  <td>{{this.TotalOpp}}</td>
                  <td>{{this.PPK}}</td>
                  <td>{{this.Expected_Wins}}</td>
                  <td>{{this.Path_Expectation}}</td>
                  <td>{{this.O_U}}</td>
                  <td>{{this.Sal_Change}}</td>
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
{{/if}}

{{#if fantasydataDef}}
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
                <th>Team Name</th>
                <th>Opposing</th>
                <th>Day</th>
                <th>Opp QB Injury Status</th>
                <th>Type of Injury</th>
                <th>Opposing QB Score of Injury</th>
                <th>Rank vs Position</th>
                <th>Player Rating</th>
                <th>Yards Allowed</th>
                <th>Expected Wins</th>
                <th>Over/Under</th>
                <th>Salary Change</th>
                <th>Fantasy Player Score</th>
              </tr>
            </thead>
            <tbody>
              {{#each fantasydataDef}}
                <tr style='font-size:10px;'>
                  <td>{{this.Week}}</td>
                  <td>{{this.Player}}</td>
                  <td>{{this.Sal}}</td>
                  <td>{{this.POS}}</td>
                  <td>{{this.Team_Name}}</td>
                  <td>{{this.Opp}}</td>
                  <td>{{this.Day}}</td>
                  <td>{{this.OPP_QB_Injury_Status}}</td>
                  <td>{{this.Type_Injury}}</td>
                  <td>{{this.OppQB_Score}}</td>
                  <td>{{this.RvP}}</td>
                  <td>{{this.PR}}</td>
                  <td>{{this.Yards_Allowed}}</td>
                  <td>{{this.Expected_Wins}}</td>
                  <td>{{this.O_U}}</td>
                  <td>{{this.Sal_Change}}</td>
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
{{/if}}
<!-- <li><a href="/NFL">NFL<span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></a></li> -->
<!-- <li class="dropdown">
  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li><a href="#">Page 1-1</a></li>
    <li><a href="#">Page 1-2</a></li>
    <li><a href="#">Page 1-3</a></li>
  </ul>
</li> -->




==========



DATABASE shit

CREATE TABLE MatchupsNFL
(
  MatchupsNFLId int NOT NULL AUTO_INCREMENT,
  timeteamplay varchar(255),
  awayteam varchar(255),
  hometeam varchar(255),
  weather varchar(255),
  totalpoint int,
  spread int,
  PRIMARY KEY (MatchupsNFLId),
  date TIMESTAMP
);

CREATE TABLE NFLDataQB(
  Week             INTEGER
 ,Player           VARCHAR(18)
 ,Sal              INTEGER
 ,POS              VARCHAR(2)
 ,Team             VARCHAR(3)
 ,Team_Name        VARCHAR(11)
 ,ID               VARCHAR(20)
 ,Injury_Status    VARCHAR(1)
 ,Type_Injury      VARCHAR(1)
 ,RvP              INTEGER
 ,PR               INTEGER
 ,OPP_DEF_RANK     NUMERIC(5,2)
 ,FPPG             NUMERIC(11,8)
 ,PassAttempt_Game NUMERIC(7,2)
 ,RUSHAtt_Game     NUMERIC(6,2)
 ,TotalOpp         NUMERIC(7,2)
 ,PPA              NUMERIC(6,2)
 ,DOVA             NUMERIC(5,3)
 ,Expected_Wins    VARCHAR(6)
 ,Path_Expectation VARCHAR(6)
 ,O_U              NUMERIC(7,2)
 ,ML               VARCHAR(3)
 ,SL               VARCHAR(3)
 ,Ending_ML        VARCHAR(9)
 ,Line_Change      VARCHAR(8)
 ,Sal_Change       BIT
 ,OL_RANK          NUMERIC(4,2)
 ,Prating          NUMERIC(4,2)
 ,CriteriaScore    NUMERIC(4,2)
 ,CritRank         INTEGER
 ,FPS              NUMERIC(5,2)
);

CREATE TABLE NFLDataRB(
   Week             INTEGER
  ,Player           VARCHAR(17)
  ,Sal              INTEGER
  ,POS              VARCHAR(2)
  ,Team             VARCHAR(3)
  ,Team_Name        VARCHAR(11)
  ,ID               VARCHAR(19)
  ,Injury_Status    VARCHAR(1)
  ,Type_Injury      VARCHAR(19)
  ,Spread           NUMERIC(4,1)
  ,RVP              INTEGER
  ,PR               INTEGER
  ,PPG              NUMERIC(11,9)
  ,RUSHAtt_Game     NUMERIC(7,2)
  ,Rec_Targ         NUMERIC(6,2)
  ,TotalOpp         NUMERIC(7,2)
  ,PPA              NUMERIC(6,2)
  ,R_DOVA           VARCHAR(7)
  ,Expected_Wins    NUMERIC(6,2)
  ,Path_Expectation NUMERIC(6,2)
  ,O_U              NUMERIC(7,2)
  ,ML               NUMERIC(6,2)
  ,SL               NUMERIC(6,2)
  ,Ending_ML        VARCHAR(9)
  ,Line_Change      VARCHAR(9)
  ,Sal_Change       BIT
  ,PRating          NUMERIC(6,2)
  ,Snap_Count       NUMERIC(6,2)
  ,OFL_RATING       NUMERIC(6,2)
  ,CriteriaScore    NUMERIC(6,2)
  ,CritRank         NUMERIC(7,2)
  ,FPS              NUMERIC(4,1)
);
CREATE TABLE NFLDataWR(
   Week             INTEGER
  ,Player           VARCHAR(17)
  ,Sal              INTEGER
  ,POS              VARCHAR(2)
  ,Team             VARCHAR(3)
  ,Team_Name        VARCHAR(11)
  ,ID               VARCHAR(19)
  ,Injury_Status    VARCHAR(1)
  ,Type_Injury      VARCHAR(5)
  ,Spread           NUMERIC(5,1)
  ,QB_Score         NUMERIC(4,2)
  ,RvP              INTEGER
  ,PR               INTEGER
  ,PPG              NUMERIC(5,2)
  ,RUSHAtt_Game     NUMERIC(4,2)
  ,Rec_Targ         NUMERIC(7,2)
  ,Recs             NUMERIC(6,2)
  ,Total_Opp        NUMERIC(7,2)
  ,PPA              NUMERIC(6,2)
  ,P_DOVA           NUMERIC(6,2)
  ,Expected_Wins    NUMERIC(6,2)
  ,Path_Expectation NUMERIC(6,2)
  ,O_U              NUMERIC(7,2)
  ,ML               NUMERIC(6,2)
  ,SL               NUMERIC(6,2)
  ,Ending_ML        VARCHAR(9)
  ,Line_Change      VARCHAR(8)
  ,Sal_Change       BIT
  ,Snap_Count       NUMERIC(5,3)
  ,PRating          NUMERIC(11,9)
  ,CriteriaScore    NUMERIC(5,2)
  ,CritRank         INTEGER
  ,FPS              NUMERIC(4,1)
);
CREATE TABLE NFLDataTE(
   Week             INTEGER
  ,Player           VARCHAR(17)
  ,Sal              INTEGER
  ,POS              VARCHAR(2)
  ,Team             VARCHAR(3)
  ,Team_Name        VARCHAR(11)
  ,ID               VARCHAR(19)
  ,Injury_Status    VARCHAR(1)
  ,Type_Injury      VARCHAR(1)
  ,Spread           NUMERIC(4,1)
  ,QB_Score         NUMERIC(4,2)
  ,RvP              INTEGER
  ,PR               INTEGER
  ,PPG              NUMERIC(5,2)
  ,RUSHAtt_Game     NUMERIC(4,2)
  ,Rec_Targ         NUMERIC(6,2)
  ,Recs             NUMERIC(6,2)
  ,Total_Opp        NUMERIC(6,2)
  ,PPA              NUMERIC(6,2)
  ,P_DOVA           NUMERIC(6,2)
  ,Expected_Wins    NUMERIC(6,2)
  ,Path_Expectation NUMERIC(6,2)
  ,O_U              NUMERIC(7,2)
  ,ML               NUMERIC(6,2)
  ,SL               NUMERIC(6,2)
  ,Ending_ML        VARCHAR(9)
  ,Line_Change      VARCHAR(8)
  ,Sal_Change       BIT
  ,Snap_Count       NUMERIC(5,3)
  ,PRating          NUMERIC(4,2)
  ,CriteriaScore    NUMERIC(7,2)
  ,CritRank         INTEGER
  ,FPS              NUMERIC(3,1)
);
CREATE TABLE NFLDataK(
   Week             INTEGER
  ,Player           VARCHAR(18)
  ,Sal              INTEGER
  ,POS              VARCHAR(1)
  ,Team             VARCHAR(3)
  ,Team_Name        VARCHAR(11)
  ,Injury_Status    VARCHAR(1)
  ,Type_Injury      VARCHAR(1)
  ,RvP              INTEGER
  ,PR               INTEGER
  ,PPG              NUMERIC(5,2)
  ,Total_Opp        NUMERIC(6,2)
  ,PPK              NUMERIC(6,2)
  ,Expected_Wins    NUMERIC(6,2)
  ,Path_Expectation NUMERIC(6,2)
  ,O_U              NUMERIC(7,2)
  ,ML               NUMERIC(6,2)
  ,SL               NUMERIC(6,2)
  ,Ending_ML        VARCHAR(9)
  ,Line_Change      VARCHAR(8)
  ,Sal_Change       BIT
  ,PRating          NUMERIC(6,2)
  ,CriteriaScore    NUMERIC(6,2)
  ,CritRank         NUMERIC(6,2)
  ,FPS              INTEGER
);
CREATE TABLE NFLDataDef(
   Week                 BIT NOT NULL
  ,Player               VARCHAR(19)
  ,Sal                  INTEGER
  ,POS                  VARCHAR(3)
  ,Team                 VARCHAR(3)
  ,Team_Name            VARCHAR(13)
  ,Opp                  VARCHAR(3)
  ,Day                  VARCHAR(1)
  ,OPP_QB_Injury_Status VARCHAR(1)
  ,Type_Injury          VARCHAR(10)
  ,OppQB_Score          NUMERIC(4,2)
  ,RvP                  NUMERIC(7,2)
  ,PR                   NUMERIC(7,2)
  ,Yards_Allowed        NUMERIC(8,2)
  ,DEF_DOVA             VARCHAR(7)
  ,Opp_O_DOVA           VARCHAR(7)
  ,CombinedDOVA         VARCHAR(7)
  ,Expected_Wins        NUMERIC(6,2)
  ,Path_Expectation     NUMERIC(6,2)
  ,O_U                  NUMERIC(7,2)
  ,ML                   NUMERIC(6,2)
  ,SL                   NUMERIC(6,2)
  ,Ending_ML            VARCHAR(9)
  ,Line_Change          VARCHAR(8)
  ,Sal_Change           BIT
  ,PRating              VARCHAR(7)
  ,CriteriaScore        NUMERIC(3,1)
  ,CritRank             INTEGER
  ,FPS                  INTEGER
);


// function cheerioNBA(url) {
//   request(url, function (error, response, html) {
//     var $ = cheerio.load(html);
//     var json = {playernameandteam: ''};
//   $('div.player-news-desc').filter(function(i, element){
//     var playernameandteam = $(element).children('h4').text();
//
//     // console.log(newtime, time);
//       fantasynews.createNewsNBA(['fantasynews'], [playernameandteam], function(fantasynewsnba){
//          // can log here if i like
//          // delete t2 from fantasynewsnba t1 join fantasynewsnba t2 on (t2.fantasynews = t1.fantasynews and t2.fantasyid > t1.fantasyid);
//       })
//     });
//   });
// }
//
// function cheerioNFL(url) {
//   request(url, function (error, response, html) {
//     var $ = cheerio.load(html);
//     var json = {playernameandteam: ''};
//   $('div.player-news-desc').filter(function(i, element){
//       var playernameandteam = $(element).children('h4').text();
//       fantasynews.createNews(['fantasynews'], [playernameandteam], function(fantasynewsnba){
//         //can log here if i like
//       })
//     });
//   });
// }
// cheerioNBA(url2NBA);

//
// cheerioNFL(url2NFL);
// cheerioNFL(urlNFL);


// heroku restart -a wearefantasy .

// mysql -h uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com -u bx2ajv69tsflz7fv -pbk7cnbekaw907zll wl8zg20cpj22w77k < backup.sql

// mysqldump -h localhost -u root -p fantasy > backup.sql

//  delete t2 from fantasynewsnba t1 join fantasynewsnba t2 on (t2.fantasynews = t1.fantasynews and t2.fantasyid > t1.fantasyid);

// https://fantasydata.com/rss/rotoworld/?format=json

// SELECT * FROM fantasynewsnba ORDER BY fantasyinfo DESC;

// var email = req.session.user_email;
// var condition = "email = '" + email + "'";
    // user.findOneUser(condition, function(user){
      // });
router.get('/sign-out', function(req,res){
req.session.destroy(function(err){
  res.redirect('/')
});
});
