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
CREATE TABLE MatchupsNFL
(
  MatchupsNFLId int NOT NULL AUTO_INCREMENT,
  awayteam varchar(255),
  hometeam varchar(255),
  weather varchar(255),
  totalpoint int,
  spread int,
  PRIMARY KEY (MatchupsNFLId),
  date TIMESTAMP
);

CREATE TABLE NFLDataQB(
  Week INT,
  Position VARCHAR(255) CHARACTER SET utf8,
  Team VARCHAR(255) CHARACTER SET utf8,
  Team_Name VARCHAR(255) CHARACTER SET utf8,
  Player_Name VARCHAR(255) CHARACTER SET utf8,
  Injury_Status VARCHAR(255) CHARACTER SET utf8,
  Type_of_Injury VARCHAR(255) CHARACTER SET utf8,
  Games_Played INT,
  Spread INT,
  Player_Salary INT,
  Rank_Vs_Pos INT,
  Player_Rank INT,
  OU INT,
  Rating INT,
  Criteria_Score INT,
  FP INT
);
CREATE TABLE NFLDataRB(
  Week INT,
  Position VARCHAR(255) CHARACTER SET utf8,
  Team VARCHAR(255) CHARACTER SET utf8,
  Team_Name VARCHAR(255) CHARACTER SET utf8,
  Player_Name VARCHAR(255) CHARACTER SET utf8,
  Injury_Status VARCHAR(255) CHARACTER SET utf8,
  Type_of_Injury VARCHAR(255) CHARACTER SET utf8,
  Games_Played INT,
  Spread INT,
  Player_Salary INT,
  Rank_Vs_Pos INT,
  Player_Rank INT,
  OU INT,
  Rating INT,
  Criteria_Score INT,
  FP INT
);
CREATE TABLE NFLDataWR(
  Week INT,
  Position VARCHAR(255) CHARACTER SET utf8,
  Team VARCHAR(255) CHARACTER SET utf8,
  Team_Name VARCHAR(255) CHARACTER SET utf8,
  Player_Name VARCHAR(255) CHARACTER SET utf8,
  Injury_Status VARCHAR(255) CHARACTER SET utf8,
  Type_of_Injury VARCHAR(255) CHARACTER SET utf8,
  Games_Played INT,
  Spread INT,
  Player_Salary INT,
  Rank_Vs_Pos INT,
  Player_Rank INT,
  OU INT,
  Rating INT,
  Criteria_Score INT,
  FP INT
);
CREATE TABLE NFLDataTE(
  Week INT,
  Position VARCHAR(255) CHARACTER SET utf8,
  Team VARCHAR(255) CHARACTER SET utf8,
  Team_Name VARCHAR(255) CHARACTER SET utf8,
  Player_Name VARCHAR(255) CHARACTER SET utf8,
  Injury_Status VARCHAR(255) CHARACTER SET utf8,
  Type_of_Injury VARCHAR(255) CHARACTER SET utf8,
  Games_Played INT,
  Spread INT,
  Player_Salary INT,
  Rank_Vs_Pos INT,
  Player_Rank INT,
  OU INT,
  Rating INT,
  Criteria_Score INT,
  FP INT
);
CREATE TABLE NFLDataK(
  Week INT,
  Position VARCHAR(255) CHARACTER SET utf8,
  Team VARCHAR(255) CHARACTER SET utf8,
  Team_Name VARCHAR(255) CHARACTER SET utf8,
  Player_Name VARCHAR(255) CHARACTER SET utf8,
  Injury_Status VARCHAR(255) CHARACTER SET utf8,
  Type_of_Injury VARCHAR(255) CHARACTER SET utf8,
  Games_Played INT,
  Spread INT,
  Player_Salary INT,
  Rank_Vs_Pos INT,
  Player_Rank INT,
  OU INT,
  Rating INT,
  Criteria_Score INT,
  FP INT
);
CREATE TABLE NFLDataDef(
  Week INT,
  Position VARCHAR(255) CHARACTER SET utf8,
  Team VARCHAR(255) CHARACTER SET utf8,
  Team_Name VARCHAR(255) CHARACTER SET utf8,
  Player_Name VARCHAR(255) CHARACTER SET utf8,
  Injury_Status VARCHAR(255) CHARACTER SET utf8,
  Type_of_Injury VARCHAR(255) CHARACTER SET utf8,
  Games_Played INT,
  Spread INT,
  Player_Salary INT,
  Rank_Vs_Pos INT,
  Player_Rank INT,
  OU INT,
  Rating INT,
  Criteria_Score INT,
  FP INT
);
