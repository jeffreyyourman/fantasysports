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

CREATE TABLE FantasyNews (
  fantasyid int not null AUTO_INCREMENT,
  fantasynews varchar(255) NOT NULL,
  fantasyimpact varchar(255) NOT NULL,
  fantasyinfo varchar(255) NOT NULL,
  date TIMESTAMP,
  PRIMARY KEY (fantasyid)
);
CREATE TABLE FantasyNewsNBA (
  fantasyid int not null AUTO_INCREMENT,
  fantasynews varchar(255) NOT NULL,
  fantasyimpact varchar(255) NOT NULL,
  fantasyinfo varchar(255) NOT NULL,
  date TIMESTAMP,
  PRIMARY KEY (fantasyid)
);
