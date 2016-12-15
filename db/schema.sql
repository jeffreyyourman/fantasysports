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
  ProjMins varchar(255) NOT NULL,
  Salary int,
  Useage varchar(255) NOT NULL,
  PPGL10 varchar(255) NOT NULL,
  PPM varchar(255) NOT NULL,
  OVP varchar(255) NOT NULL,
  GLAdjust varchar(255) NOT NULL,
  TotalAdjust varchar(255) NOT NULL,
  ProjScore decimal,
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
  PlayerCount varchar(255) NOT NULL,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
  date TIMESTAMP,
  PRIMARY KEY (NFLplayerId)
);




=======NFL SCHEMA END =======
