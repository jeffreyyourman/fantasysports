CREATE DATABASE fantasy;
use fantasy

CREATE TABLE data(
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
INSERT INTO data(Week,Position,Team,Team_Name,Player_Name,Injury_Status,Type_of_Injury,Games_Played,Spread,Player_Salary,Rank_Vs_Pos,Player_Rank,OU,Rating,Criteria_Score,FP) VALUES (11,'WR','ATL','Atlanta','Julio Jones',NULL,NULL,9,-5,9100,25,11,47.5,9.986533687,7.139129826,20.5);
INSERT INTO data(Week,Position,Team,Team_Name,Player_Name,Injury_Status,Type_of_Injury,Games_Played,Spread,Player_Salary,Rank_Vs_Pos,Player_Rank,OU,Rating,Criteria_Score,FP) VALUES (11,'WR','HOU','Houston','DeAndre Hopkins','P','Knee',9,3.5,8900,18,30,40,8.319055398,6.634980539,26.3);
INSERT INTO data(Week,Position,Team,Team_Name,Player_Name,Injury_Status,Type_of_Injury,Games_Played,Spread,Player_Salary,Rank_Vs_Pos,Player_Rank,OU,Rating,Criteria_Score,FP) VALUES (11,'WR','DAL','Dallas','Dez Bryant','Q','Knee',4,-2,8400,20,23,46,8.534897841,1.476095004,12.5);
INSERT INTO data(Week,Position,Team,Team_Name,Player_Name,Injury_Status,Type_of_Injury,Games_Played,Spread,Player_Salary,Rank_Vs_Pos,Player_Rank,OU,Rating,Criteria_Score,FP) VALUES (11,'WR','CIN','Cincinnati','A.J. Green',NULL,NULL,9,5,8200,11,7,48,10.2724627,9.350960561,9.9);
