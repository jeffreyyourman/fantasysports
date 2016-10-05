
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

{{#if fantasydataQB}}
<div id='quarterback' class="container-fluid">
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
                <th>OPP Def Rank</th>
                <th>Fantasy Points per game</th>
                <th>Pass Attempt pg</th>
                <th>Rush Attempt pg</th>
                <th>TotalOpp</th>
                <th>Points Per Attempt</th>
                <th>Expected Wins</th>
                <th>Over/Under</th>
                <th>Sal Change</th>
                <th>Offensive Lineman Rank</th>
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
                  <td>{{this.Team_Name}}</td>
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
                  <td>{{this.Expected_Wins}}</td>
                  <td>{{this.O_U}}</td>
                  <td>{{this.Sal_Change}}</td>
                  <td>{{this.OL_RANK}}</td>
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

{{#if fantasydataRB}}
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
                <th>Rush Attempts per game</th>
                <th>Receiving Target</th>
                <th>Total Opposition</th>
                <th>Points Per Attempt</th>
                <th>Expected Wins</th>
                <th>Path Expectation</th>
                <th>Over/Under</th>
                <th>Salary Change</th>
                <th>Snap Count</th>
                <th>OFL Rating</th>
                <th>Fantasy Player Score</th>
              </tr>
            </thead>
            <tbody>
              {{#each fantasydataRB}}
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
                  <td>{{this.TotalOpp}}</td>
                  <td>{{this.PPA}}</td>
                  <td>{{this.Expected_Wins}}</td>
                  <td>{{this.Path_Expectation}}</td>
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
