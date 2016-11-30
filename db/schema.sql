-- PPA = Point Per Attempt

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

CREATE TABLE googlesheetsAPI (
  Player varchar(255) NOT NULL,
  H/A varchar(255) NOT NULL,
  Position varchar(255) NOT NULL,
  Team varchar(255) NOT NULL,
  Opp varchar(255) NOT NULL,
  Condition varchar(255) NOT NULL,
  Details varchar(255) NOT NULL,
  POSID varchar(255) NOT NULL,
  Avg Mins/L10 int
  Proj Mins int
  Salary int
  Useage% int
  PPG/L10 int
  PPM int
  OVP int
  GL Adjust int,
  Total Adjust int,
  Proj Score int,
  GameLine int,
  Projected Pts int,
  Value int,
  Ownership% int (percentage),
  Path Compare  int (percentage),
  Expected Value int,
  Net Value int,
  Games Played int,
  Salary Adjust int,
  RecPr int,
  Score int,
  PTsVPos int,
  DELETE varchar(255) NOT NULL,
  CriteriaRanking int,
  Player Count int
);






























37:38:20
36.2
12400
31.60%
58.35
1.61
0.9134
1.13
1.03
113
215
58.93
4.75
75.60%
57%
3.23
1.53
6
600
8.25
4.24
29.12
DELETE
6
0
