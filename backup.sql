-- MySQL dump 10.13  Distrib 5.7.10, for osx10.11 (x86_64)
--
-- Host: localhost    Database: fantasy
-- ------------------------------------------------------
-- Server version	5.7.10

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `MatchupsNFL`
--

DROP TABLE IF EXISTS `MatchupsNFL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MatchupsNFL` (
  `MatchupsNFLId` int(11) NOT NULL AUTO_INCREMENT,
  `awayteam` varchar(255) DEFAULT NULL,
  `hometeam` varchar(255) DEFAULT NULL,
  `weather` varchar(255) DEFAULT NULL,
  `totalpoint` int(11) DEFAULT NULL,
  `spread` int(11) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`MatchupsNFLId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MatchupsNFL`
--

LOCK TABLES `MatchupsNFL` WRITE;
/*!40000 ALTER TABLE `MatchupsNFL` DISABLE KEYS */;
INSERT INTO `MatchupsNFL` VALUES (1,'Giants','Jets','70 Partly Cloudy',50,5,'2016-09-06 00:42:21');
/*!40000 ALTER TABLE `MatchupsNFL` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NFLDataDef`
--

DROP TABLE IF EXISTS `NFLDataDef`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NFLDataDef` (
  `Week` int(11) DEFAULT NULL,
  `Position` varchar(255) DEFAULT NULL,
  `Team` varchar(255) DEFAULT NULL,
  `Team_Name` varchar(255) DEFAULT NULL,
  `Player_Name` varchar(255) DEFAULT NULL,
  `Injury_Status` varchar(255) DEFAULT NULL,
  `Type_of_Injury` varchar(255) DEFAULT NULL,
  `Games_Played` int(11) DEFAULT NULL,
  `Spread` int(11) DEFAULT NULL,
  `Player_Salary` int(11) DEFAULT NULL,
  `Rank_Vs_Pos` int(11) DEFAULT NULL,
  `Player_Rank` int(11) DEFAULT NULL,
  `OU` int(11) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Criteria_Score` int(11) DEFAULT NULL,
  `FP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataDef`
--

LOCK TABLES `NFLDataDef` WRITE;
/*!40000 ALTER TABLE `NFLDataDef` DISABLE KEYS */;
INSERT INTO `NFLDataDef` VALUES (11,'Def','CIN','Cincinnati','DEFENSE',NULL,NULL,9,5,8200,11,7,48,10,9,10),(11,'Def','CIN','Cincinnati','DEFENSE',NULL,NULL,9,5,8200,11,7,48,10,9,10),(11,'Def','CIN','Cincinnati','DEFENSE',NULL,NULL,9,5,8200,11,7,48,10,9,10);
/*!40000 ALTER TABLE `NFLDataDef` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NFLDataK`
--

DROP TABLE IF EXISTS `NFLDataK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NFLDataK` (
  `Week` int(11) DEFAULT NULL,
  `Position` varchar(255) DEFAULT NULL,
  `Team` varchar(255) DEFAULT NULL,
  `Team_Name` varchar(255) DEFAULT NULL,
  `Player_Name` varchar(255) DEFAULT NULL,
  `Injury_Status` varchar(255) DEFAULT NULL,
  `Type_of_Injury` varchar(255) DEFAULT NULL,
  `Games_Played` int(11) DEFAULT NULL,
  `Spread` int(11) DEFAULT NULL,
  `Player_Salary` int(11) DEFAULT NULL,
  `Rank_Vs_Pos` int(11) DEFAULT NULL,
  `Player_Rank` int(11) DEFAULT NULL,
  `OU` int(11) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Criteria_Score` int(11) DEFAULT NULL,
  `FP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataK`
--

LOCK TABLES `NFLDataK` WRITE;
/*!40000 ALTER TABLE `NFLDataK` DISABLE KEYS */;
INSERT INTO `NFLDataK` VALUES (11,'K','CIN','Cincinnati','Kicker',NULL,NULL,9,5,8200,11,7,48,10,9,10),(11,'K','CIN','Cincinnati','Kicker',NULL,NULL,9,5,8200,11,7,48,10,9,10),(11,'K','CIN','Cincinnati','Kicker',NULL,NULL,9,5,8200,11,7,48,10,9,10);
/*!40000 ALTER TABLE `NFLDataK` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NFLDataQB`
--

DROP TABLE IF EXISTS `NFLDataQB`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NFLDataQB` (
  `Week` int(11) DEFAULT NULL,
  `Position` varchar(255) DEFAULT NULL,
  `Team` varchar(255) DEFAULT NULL,
  `Team_Name` varchar(255) DEFAULT NULL,
  `Player_Name` varchar(255) DEFAULT NULL,
  `Injury_Status` varchar(255) DEFAULT NULL,
  `Type_of_Injury` varchar(255) DEFAULT NULL,
  `Games_Played` int(11) DEFAULT NULL,
  `Spread` int(11) DEFAULT NULL,
  `Player_Salary` int(11) DEFAULT NULL,
  `Rank_Vs_Pos` int(11) DEFAULT NULL,
  `Player_Rank` int(11) DEFAULT NULL,
  `OU` int(11) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Criteria_Score` int(11) DEFAULT NULL,
  `FP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataQB`
--

LOCK TABLES `NFLDataQB` WRITE;
/*!40000 ALTER TABLE `NFLDataQB` DISABLE KEYS */;
INSERT INTO `NFLDataQB` VALUES (11,'QB','ATL','Atlanta','QuarterBack',NULL,NULL,9,-5,9100,25,11,48,10,7,21),(11,'QB','ATL','Atlanta','QuarterBack',NULL,NULL,9,-5,9100,25,11,48,10,7,21),(11,'QB','ATL','Atlanta','QuarterBack',NULL,NULL,9,-5,9100,25,11,48,10,7,21);
/*!40000 ALTER TABLE `NFLDataQB` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NFLDataRB`
--

DROP TABLE IF EXISTS `NFLDataRB`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NFLDataRB` (
  `Week` int(11) DEFAULT NULL,
  `Position` varchar(255) DEFAULT NULL,
  `Team` varchar(255) DEFAULT NULL,
  `Team_Name` varchar(255) DEFAULT NULL,
  `Player_Name` varchar(255) DEFAULT NULL,
  `Injury_Status` varchar(255) DEFAULT NULL,
  `Type_of_Injury` varchar(255) DEFAULT NULL,
  `Games_Played` int(11) DEFAULT NULL,
  `Spread` int(11) DEFAULT NULL,
  `Player_Salary` int(11) DEFAULT NULL,
  `Rank_Vs_Pos` int(11) DEFAULT NULL,
  `Player_Rank` int(11) DEFAULT NULL,
  `OU` int(11) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Criteria_Score` int(11) DEFAULT NULL,
  `FP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataRB`
--

LOCK TABLES `NFLDataRB` WRITE;
/*!40000 ALTER TABLE `NFLDataRB` DISABLE KEYS */;
INSERT INTO `NFLDataRB` VALUES (11,'RB','HOU','Houston','RunningBack','P','Knee',9,4,8900,18,30,40,8,7,26),(11,'RB','HOU','Houston','RunningBack','P','Knee',9,4,8900,18,30,40,8,7,26),(11,'RB','HOU','Houston','RunningBack','P','Knee',9,4,8900,18,30,40,8,7,26);
/*!40000 ALTER TABLE `NFLDataRB` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NFLDataTE`
--

DROP TABLE IF EXISTS `NFLDataTE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NFLDataTE` (
  `Week` int(11) DEFAULT NULL,
  `Position` varchar(255) DEFAULT NULL,
  `Team` varchar(255) DEFAULT NULL,
  `Team_Name` varchar(255) DEFAULT NULL,
  `Player_Name` varchar(255) DEFAULT NULL,
  `Injury_Status` varchar(255) DEFAULT NULL,
  `Type_of_Injury` varchar(255) DEFAULT NULL,
  `Games_Played` int(11) DEFAULT NULL,
  `Spread` int(11) DEFAULT NULL,
  `Player_Salary` int(11) DEFAULT NULL,
  `Rank_Vs_Pos` int(11) DEFAULT NULL,
  `Player_Rank` int(11) DEFAULT NULL,
  `OU` int(11) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Criteria_Score` int(11) DEFAULT NULL,
  `FP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataTE`
--

LOCK TABLES `NFLDataTE` WRITE;
/*!40000 ALTER TABLE `NFLDataTE` DISABLE KEYS */;
INSERT INTO `NFLDataTE` VALUES (11,'TE','CIN','Cincinnati','TightEnd',NULL,NULL,9,5,8200,11,7,48,10,9,10),(11,'TE','CIN','Cincinnati','TightEnd',NULL,NULL,9,5,8200,11,7,48,10,9,10),(11,'TE','CIN','Cincinnati','TightEnd',NULL,NULL,9,5,8200,11,7,48,10,9,10);
/*!40000 ALTER TABLE `NFLDataTE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NFLDataWR`
--

DROP TABLE IF EXISTS `NFLDataWR`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NFLDataWR` (
  `Week` int(11) DEFAULT NULL,
  `Position` varchar(255) DEFAULT NULL,
  `Team` varchar(255) DEFAULT NULL,
  `Team_Name` varchar(255) DEFAULT NULL,
  `Player_Name` varchar(255) DEFAULT NULL,
  `Injury_Status` varchar(255) DEFAULT NULL,
  `Type_of_Injury` varchar(255) DEFAULT NULL,
  `Games_Played` int(11) DEFAULT NULL,
  `Spread` int(11) DEFAULT NULL,
  `Player_Salary` int(11) DEFAULT NULL,
  `Rank_Vs_Pos` int(11) DEFAULT NULL,
  `Player_Rank` int(11) DEFAULT NULL,
  `OU` int(11) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Criteria_Score` int(11) DEFAULT NULL,
  `FP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataWR`
--

LOCK TABLES `NFLDataWR` WRITE;
/*!40000 ALTER TABLE `NFLDataWR` DISABLE KEYS */;
INSERT INTO `NFLDataWR` VALUES (11,'WR','DAL','Dallas','WideReceiver','Q','Knee',4,-2,8400,20,23,46,9,1,13),(11,'WR','DAL','Dallas','WideReceiver','Q','Knee',4,-2,8400,20,23,46,9,1,13),(11,'WR','DAL','Dallas','WideReceiver','Q','Knee',4,-2,8400,20,23,46,9,1,13);
/*!40000 ALTER TABLE `NFLDataWR` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-05 21:22:29
