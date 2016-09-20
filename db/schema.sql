CREATE DATABASE fantasy DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;
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

CREATE TABLE FantasyNews (
  fantasyid int not null AUTO_INCREMENT,
  fantasynews varchar(255) NOT NULL,
  PRIMARY KEY (fantasyid)
);
