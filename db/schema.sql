CREATE DATABASE fantasy;
USE fantasy

CREATE TABLE Users
(
  userId int NOT NULL AUTO_INCREMENT,
  fullname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (userId),
  date TIMESTAMP
);

=======NBA SCHEMA START =======
-- 43
CREATE TABLE googlesheetsapi (
  playerId int NOT NULL AUTO_INCREMENT,
  Player varchar(255) NOT NULL,
  HomeAway varchar(255) NOT NULL,
  Position varchar(255) NOT NULL,
  Team varchar(255) NOT NULL,
  Opp varchar(255) NOT NULL,
  Mycondition varchar(255) NOT NULL,
  details varchar(255) NOT NULL,
  posid varchar(255) NOT NULL,
  AvgMinsL10 varchar(255) NOT NULL,
  ProjMins int,
  Salary int,
  Useage varchar(255) NOT NULL,
  PPGL10 varchar(255) NOT NULL,
  PPM varchar(255) NOT NULL,
  OVP varchar(255) NOT NULL,
  GLAdjust varchar(255) NOT NULL,
  TotalAdjust varchar(255) NOT NULL,
  ProjScore Decimal,
  GameLine varchar(255) NOT NULL,
  ProjectedPts varchar(255) NOT NULL,
  Value varchar(255) NOT NULL,
  Ownership varchar(255) NOT NULL,
  PathCompare  varchar(255) NOT NULL,
  ExpectedValue varchar(255) NOT NULL,
  NetValue varchar(255) NOT NULL,
  GamesPlayed varchar(255) NOT NULL,
  SalaryAdjust varchar(255) NOT NULL,
  RecPr varchar(255) NOT NULL,
  Score varchar(255) NOT NULL,
  PTsVPos varchar(255) NOT NULL,
  DeleteSuggested varchar(255) NOT NULL,
  CriteriaRanking int,
  GameTime varchar(255) NOT NULL,
  awaygame varchar(255) NOT NULL,
  B2BGame varchar(255) NOT NULL,
  ThreeinFour varchar(255) NOT NULL,
  PlayerCount varchar(255) NOT NULL,
  PPMDK varchar(255) NOT NULL,
  ProjectedPtsDK varchar(255) NOT NULL,
  SalaryDK int,
  PositionDK varchar(255) NOT NULL,
  ValueDK varchar(255) NOT NULL,
  updated varchar (255) NOT NULL,
  PRIMARY KEY (playerId)
);

=======NBA SCHEMA END =======

=======NFL SCHEMA START =======


CREATE TABLE googlesheetsapiNFL (
  NFLplayerId int NOT NULL AUTO_INCREMENT,
  Player varchar (255) NOT NULL,
  Sal int,
  POS varchar (255) NOT NULL,
  Team varchar (255) NOT NULL,
  RvP int,
  TotalOpp varchar (255) NOT NULL,
  TeamValueVsPos varchar (255) NOT NULL,
  WinVsOpp varchar (255) NOT NULL,
  OU varchar (255) NOT NULL,
  Line_Change varchar (255) NOT NULL,
  Sal_Change varchar (255) NOT NULL,
  CriteriaScore varchar (255) NOT NULL,
  CritRank varchar (255) NOT NULL,
  PPA varchar (255) NOT NULL,
  Snap_Count varchar (255) NOT NULL,
  FPS varchar (255) NOT NULL,
  Opp varchar (255) NOT NULL,
  PlayerCount varchar (255) NOT NULL,
  Injury_Status varchar (255) NOT NULL,
  RecPre varchar (255) NOT NULL,
  Ownership varchar (255) NOT NULL,
  updated varchar (255) NOT NULL,
  PRIMARY KEY (NFLplayerId)
);

CREATE TABLE googlesheetsapiNBATopPlays (
  NBATopPlaysPlayerId int NOT NULL AUTO_INCREMENT,
  Player varchar (255) NOT NULL,
  POS varchar (255) NOT NULL,
  Sal int,
  ProjectedPts Decimal,
  PlayerValue varchar (255) NOT NULL,
  topPlayerValue varchar (255) NOT NULL,
  Site varchar (255) NOT NULL,
  PlayerRanking int,
  updated varchar (255) NOT NULL,
  PRIMARY KEY (NBATopPlaysPlayerId)
);
=======NFL SCHEMA END =======






CREATE TABLE googlesheetsapi (
  playerId int NOT NULL AUTO_INCREMENT,
  Player varchar(255) NOT NULL,
  HomeAway varchar(255) NOT NULL,
  Position varchar(255) NOT NULL,
  Team varchar(255) NOT NULL,
  Opp varchar(255) NOT NULL,
  Mycondition varchar(255) NOT NULL,
  details varchar(255) NOT NULL,
  posid varchar(255) NOT NULL,
  AvgMinsL10 varchar(255) NOT NULL,
  ProjMins float(10,2),
  Salary int,
  Useage varchar(255) NOT NULL,
  PPGL10 varchar(255) NOT NULL,
  PPM float(10,3),
  OVP float(10,3),
  GLAdjust varchar(255) NOT NULL,
  TotalAdjust varchar(255) NOT NULL,
  ProjScore varchar(255) NOT NULL,
  GameLine varchar(255) NOT NULL,
  ProjectedPts float(10,3),
  Value float(10,3),
  Ownership varchar(255) NOT NULL,
  PathCompare  varchar(255) NOT NULL,
  ExpectedValue varchar(255) NOT NULL,
  NetValue varchar(255) NOT NULL,
  GamesPlayed varchar(255) NOT NULL,
  SalaryAdjust varchar(255) NOT NULL,
  RecPr varchar(255) NOT NULL,
  Score varchar(255) NOT NULL,
  PTsVPos float(10,3),
  DeleteSuggested varchar(255) NOT NULL,
  CriteriaRanking int,
  GameTime varchar(255) NOT NULL,
  awaygame varchar(255) NOT NULL,
  B2BGame varchar(255) NOT NULL,
  ThreeinFour varchar(255) NOT NULL,
  PlayerCount varchar(255) NOT NULL,
  PPMDK varchar(255) NOT NULL,
  ProjectedPtsDK float(10,3),
  SalaryDK int,
  PositionDK varchar(255) NOT NULL,
  ValueDK float(10,3),
  updated varchar (255) NOT NULL,
  PRIMARY KEY (playerId)
);

CREATE TABLE fanduellineup (
  fanduellineupID int NOT NULL AUTO_INCREMENT,
  PG1 varchar(255) NOT NULL,
  PG2 varchar(255) NOT NULL,
  SG1 varchar(255) NOT NULL,
  SG2 varchar(255) NOT NULL,
  SF1 varchar(255) NOT NULL,
  SF2 varchar(255) NOT NULL,
  PF1 varchar(255) NOT NULL,
  PF2 varchar(255) NOT NULL,
  C varchar(255) NOT NULL,
  Total_Fantasy_PointsProjected varchar(255) NOT NULL,
  Sal varchar(255) NOT NULL,
  Projected_Mins varchar(255) NOT NULL,
  Value varchar(255) NOT NULL,
  Useage varchar(255) NOT NULL,
  OVP varchar(255) NOT NULL,
  Avg_Total_Game_Score varchar(255) NOT NULL,
  CriteriaRanking varchar(255) NOT NULL,
  TotalProjScore varchar(255) NOT NULL,
  PointsVsPosition varchar(255) NOT NULL,
  updated varchar (255) NOT NULL,
  PRIMARY KEY (fanduellineupID)
);
