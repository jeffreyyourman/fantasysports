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
-- Table structure for table `FantasyNews`
--

DROP TABLE IF EXISTS `FantasyNews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FantasyNews` (
  `fantasyid` int(11) NOT NULL AUTO_INCREMENT,
  `fantasynews` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`fantasyid`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FantasyNews`
--

LOCK TABLES `FantasyNews` WRITE;
/*!40000 ALTER TABLE `FantasyNews` DISABLE KEYS */;
INSERT INTO `FantasyNews` VALUES (1,'Saints\' Kenny Vaccaro: Expects to play Sunday','2016-09-29 01:33:17'),(2,'49ers\' Marcus Cromartie: Practices in full Wednesday','2016-09-29 01:33:17'),(3,'49ers\' Garrett Celek: Limited at Wednesday\'s practice','2016-09-29 01:33:17'),(4,'Cardinals\' Drew Butler: Non-participant at practice Wednesday','2016-09-29 01:33:17'),(5,'Cardinals\' Michael Floyd: Limited practice Wednesday','2016-09-29 01:33:17'),(6,'Cardinals\' Robert Nkemdiche: Full participant at Wednesday\'s practice','2016-09-29 01:33:17'),(7,'Seahawks\' Nick Vannett: Limited at Wednesday\'s practice','2016-09-29 01:33:17'),(8,'Seahawks\' Tyler Lockett: Limited at Wednesday\'s practice','2016-09-29 01:33:17'),(9,'Seahawks\' Jimmy Graham: Limited Wednesday','2016-09-29 01:33:17'),(10,'Ravens\' Kamar Aiken: Did not practice Wednesday','2016-09-29 01:33:17'),(11,'Raiders\' Taiwan Jones: Does not practice Wednesday','2016-09-29 01:33:17'),(12,'Seahawks\' C.J. Prosise: Full practice Wednesday','2016-09-29 01:33:17'),(13,'Titans\' Da\'Norris Searcy: Could miss several weeks','2016-09-29 01:33:17'),(14,'Chiefs\' Jamaal Charles: Limited at practice Wednesday','2016-09-29 01:33:17'),(15,'Jets\' Eric Decker: MRI likely on tap','2016-09-29 01:33:17'),(16,'Seahawks\' Russell Wilson: Full practice Wednesday','2016-09-29 01:33:17'),(17,'Titans\' Tajae Sharpe: Limited participant Wednesday','2016-09-29 01:33:17'),(18,'Bills\' Aaron Williams: Limited on Wednesday','2016-09-29 01:33:17'),(19,'Lions\' Ryan Spadola: Resides on IR','2016-09-29 01:33:17'),(20,'Titans\' Kendall Wright: Practicing fully','2016-09-29 01:33:17'),(21,'Raiders\' Taiwan Jones: Does not practice Wednesday','2016-09-29 01:33:19'),(22,'Seahawks\' C.J. Prosise: Full practice Wednesday','2016-09-29 01:33:19'),(23,'Titans\' Da\'Norris Searcy: Could miss several weeks','2016-09-29 01:33:19'),(24,'Chiefs\' Jamaal Charles: Limited at practice Wednesday','2016-09-29 01:33:19'),(25,'Jets\' Eric Decker: MRI likely on tap','2016-09-29 01:33:19'),(26,'Seahawks\' Russell Wilson: Full practice Wednesday','2016-09-29 01:33:19'),(27,'Titans\' Tajae Sharpe: Limited participant Wednesday','2016-09-29 01:33:19'),(28,'Bills\' Aaron Williams: Limited on Wednesday','2016-09-29 01:33:19'),(29,'Lions\' Ryan Spadola: Resides on IR','2016-09-29 01:33:19'),(30,'Titans\' Kendall Wright: Practicing fully','2016-09-29 01:33:19'),(31,'Saints\' Kenny Vaccaro: Expects to play Sunday','2016-09-29 01:33:19'),(32,'49ers\' Marcus Cromartie: Practices in full Wednesday','2016-09-29 01:33:19'),(33,'49ers\' Garrett Celek: Limited at Wednesday\'s practice','2016-09-29 01:33:19'),(34,'Cardinals\' Drew Butler: Non-participant at practice Wednesday','2016-09-29 01:33:19'),(35,'Cardinals\' Michael Floyd: Limited practice Wednesday','2016-09-29 01:33:19'),(36,'Cardinals\' Robert Nkemdiche: Full participant at Wednesday\'s practice','2016-09-29 01:33:19'),(37,'Seahawks\' Nick Vannett: Limited at Wednesday\'s practice','2016-09-29 01:33:19'),(38,'Seahawks\' Tyler Lockett: Limited at Wednesday\'s practice','2016-09-29 01:33:19'),(39,'Seahawks\' Jimmy Graham: Limited Wednesday','2016-09-29 01:33:19'),(40,'Ravens\' Kamar Aiken: Did not practice Wednesday','2016-09-29 01:33:19'),(41,'Saints\' Kenny Vaccaro: Expects to play Sunday','2016-09-29 01:33:30'),(42,'49ers\' Marcus Cromartie: Practices in full Wednesday','2016-09-29 01:33:30'),(43,'49ers\' Garrett Celek: Limited at Wednesday\'s practice','2016-09-29 01:33:30'),(44,'Cardinals\' Drew Butler: Non-participant at practice Wednesday','2016-09-29 01:33:30'),(45,'Cardinals\' Michael Floyd: Limited practice Wednesday','2016-09-29 01:33:30'),(46,'Cardinals\' Robert Nkemdiche: Full participant at Wednesday\'s practice','2016-09-29 01:33:30'),(47,'Seahawks\' Nick Vannett: Limited at Wednesday\'s practice','2016-09-29 01:33:30'),(48,'Seahawks\' Tyler Lockett: Limited at Wednesday\'s practice','2016-09-29 01:33:30'),(49,'Seahawks\' Jimmy Graham: Limited Wednesday','2016-09-29 01:33:30'),(50,'Ravens\' Kamar Aiken: Did not practice Wednesday','2016-09-29 01:33:30'),(51,'Raiders\' Taiwan Jones: Does not practice Wednesday','2016-09-29 01:33:30'),(52,'Seahawks\' C.J. Prosise: Full practice Wednesday','2016-09-29 01:33:30'),(53,'Titans\' Da\'Norris Searcy: Could miss several weeks','2016-09-29 01:33:30'),(54,'Chiefs\' Jamaal Charles: Limited at practice Wednesday','2016-09-29 01:33:30'),(55,'Jets\' Eric Decker: MRI likely on tap','2016-09-29 01:33:30'),(56,'Seahawks\' Russell Wilson: Full practice Wednesday','2016-09-29 01:33:30'),(57,'Titans\' Tajae Sharpe: Limited participant Wednesday','2016-09-29 01:33:30'),(58,'Bills\' Aaron Williams: Limited on Wednesday','2016-09-29 01:33:30'),(59,'Lions\' Ryan Spadola: Resides on IR','2016-09-29 01:33:30'),(60,'Titans\' Kendall Wright: Practicing fully','2016-09-29 01:33:30'),(61,'Raiders\' Taiwan Jones: Does not practice Wednesday','2016-09-29 01:34:04'),(62,'Seahawks\' C.J. Prosise: Full practice Wednesday','2016-09-29 01:34:04'),(63,'Titans\' Da\'Norris Searcy: Could miss several weeks','2016-09-29 01:34:04'),(64,'Chiefs\' Jamaal Charles: Limited at practice Wednesday','2016-09-29 01:34:04'),(65,'Jets\' Eric Decker: MRI likely on tap','2016-09-29 01:34:04'),(66,'Seahawks\' Russell Wilson: Full practice Wednesday','2016-09-29 01:34:04'),(67,'Titans\' Tajae Sharpe: Limited participant Wednesday','2016-09-29 01:34:04'),(68,'Bills\' Aaron Williams: Limited on Wednesday','2016-09-29 01:34:04'),(69,'Lions\' Ryan Spadola: Resides on IR','2016-09-29 01:34:04'),(70,'Titans\' Kendall Wright: Practicing fully','2016-09-29 01:34:04'),(71,'Saints\' Kenny Vaccaro: Expects to play Sunday','2016-09-29 01:34:04'),(72,'49ers\' Marcus Cromartie: Practices in full Wednesday','2016-09-29 01:34:04'),(73,'49ers\' Garrett Celek: Limited at Wednesday\'s practice','2016-09-29 01:34:04'),(74,'Cardinals\' Drew Butler: Non-participant at practice Wednesday','2016-09-29 01:34:04'),(75,'Cardinals\' Michael Floyd: Limited practice Wednesday','2016-09-29 01:34:04'),(76,'Cardinals\' Robert Nkemdiche: Full participant at Wednesday\'s practice','2016-09-29 01:34:04'),(77,'Seahawks\' Nick Vannett: Limited at Wednesday\'s practice','2016-09-29 01:34:04'),(78,'Seahawks\' Tyler Lockett: Limited at Wednesday\'s practice','2016-09-29 01:34:04'),(79,'Seahawks\' Jimmy Graham: Limited Wednesday','2016-09-29 01:34:04'),(80,'Ravens\' Kamar Aiken: Did not practice Wednesday','2016-09-29 01:34:04');
/*!40000 ALTER TABLE `FantasyNews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MatchupsNFL`
--

DROP TABLE IF EXISTS `MatchupsNFL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MatchupsNFL` (
  `MatchupsNFLId` int(11) NOT NULL AUTO_INCREMENT,
  `timeteamplay` varchar(255) DEFAULT NULL,
  `awayteam` varchar(255) DEFAULT NULL,
  `hometeam` varchar(255) DEFAULT NULL,
  `weather` varchar(255) DEFAULT NULL,
  `totalpoint` int(11) DEFAULT NULL,
  `spread` int(11) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`MatchupsNFLId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MatchupsNFL`
--

LOCK TABLES `MatchupsNFL` WRITE;
/*!40000 ALTER TABLE `MatchupsNFL` DISABLE KEYS */;
INSERT INTO `MatchupsNFL` VALUES (1,'Sunday at 1pm','Carolina','Denver','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(2,'Sunday at 1pm','Bengals','Jets','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(3,'Sunday at 1pm','Buffalo','Baltimore','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(4,'Sunday at 1pm','Tampa bay','Atlanta','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(5,'Sunday at 1pm','Oakland','New orleans','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(6,'Sunday at 1pm','Chicago','Houston','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(7,'Sunday at 1pm','Greenbay','Jacksonville','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(8,'Sunday at 1pm','Minnesota','Tennessee','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(9,'Sunday at 1pm','San Diego','Kansas City','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(10,'Sunday at 1pm','Cleveland','Philadelphia','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(11,'Sunday at 1pm','Miami','Seattle','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(12,'Sunday at 1pm','New York','Dallas','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(13,'Sunday at 1pm','Detroit','Indianapolis','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(14,'Sunday at 1pm','New England','Arizona','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(15,'Sunday at 1pm','New Pittsburgh','Washington','70 Partly Cloudy',50,5,'2016-09-18 16:50:50'),(16,'Sunday at 1pm','Los Angeles','San Fransico','70 Partly Cloudy',50,5,'2016-09-18 16:50:50');
/*!40000 ALTER TABLE `MatchupsNFL` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NFLDataDef`
--

DROP TABLE IF EXISTS `NFLDataDef`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NFLDataDef` (
  `Week` bit(1) NOT NULL,
  `Player` varchar(19) DEFAULT NULL,
  `Sal` int(11) DEFAULT NULL,
  `POS` varchar(3) DEFAULT NULL,
  `Team` varchar(3) DEFAULT NULL,
  `Team_Name` varchar(13) DEFAULT NULL,
  `Opp` varchar(3) DEFAULT NULL,
  `Day` varchar(1) DEFAULT NULL,
  `OPP_QB_Injury_Status` varchar(1) DEFAULT NULL,
  `Type_Injury` varchar(10) DEFAULT NULL,
  `OppQB_Score` decimal(4,2) DEFAULT NULL,
  `RvP` decimal(7,2) DEFAULT NULL,
  `PR` decimal(7,2) DEFAULT NULL,
  `Yards_Allowed` decimal(8,2) DEFAULT NULL,
  `DEF_DOVA` varchar(7) DEFAULT NULL,
  `Opp_O_DOVA` varchar(7) DEFAULT NULL,
  `CombinedDOVA` varchar(7) DEFAULT NULL,
  `Expected_Wins` decimal(6,2) DEFAULT NULL,
  `Path_Expectation` decimal(6,2) DEFAULT NULL,
  `O_U` decimal(7,2) DEFAULT NULL,
  `ML` decimal(6,2) DEFAULT NULL,
  `SL` decimal(6,2) DEFAULT NULL,
  `Ending_ML` varchar(9) DEFAULT NULL,
  `Line_Change` varchar(8) DEFAULT NULL,
  `Sal_Change` bit(1) DEFAULT NULL,
  `PRating` varchar(7) DEFAULT NULL,
  `CriteriaScore` decimal(3,1) DEFAULT NULL,
  `CritRank` int(11) DEFAULT NULL,
  `FPS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataDef`
--

LOCK TABLES `NFLDataDef` WRITE;
/*!40000 ALTER TABLE `NFLDataDef` DISABLE KEYS */;
INSERT INTO `NFLDataDef` VALUES ('','Carolina Panthers',4700,'DEF','CAR','Carolina','DEN',NULL,'N','Rookie QB',2.23,24.00,2.00,322.90,'(0.18)','(0.05)','(0.22)',0.76,0.61,41.50,0.69,0.60,'(155.00)','(10.00)','\0','1.48',7.7,1,8),('','Seattle Seahawks',5000,'DEF','SEA','Seattle','MIA',NULL,NULL,NULL,4.90,21.00,1.00,291.80,'(0.21)','(0.05)','(0.26)',0.73,0.68,44.00,0.52,0.29,'(550.00)','150.00','\0','1.71',5.7,2,11),('','San Francisco 49ers',4400,'DEF','SF','San Francisco','LA',NULL,'N','No Starter',6.07,26.00,13.00,387.40,'0.05','(0.16)','(0.10)',0.24,0.41,43.50,0.41,0.46,'120.00','(15.00)','\0','(0.40)',5.2,3,16),('','Minnesota Vikings',4600,'DEF','MIN','Minnesota','TEN',NULL,NULL,NULL,5.63,32.00,3.00,344.20,'(0.05)','(0.19)','(0.23)',0.61,0.65,41.00,0.49,0.33,'(145.00)','(25.00)','\0','1.48',4.8,4,21),('','Detroit Lions',4300,'DEF','DET','Detroit','IND',NULL,NULL,NULL,6.43,27.00,5.00,349.60,'(0.01)','(0.20)','(0.21)',0.44,0.53,50.50,0.25,0.72,'140.00','70.00','\0','0.64',4.6,5,0);
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
  `Player` varchar(18) DEFAULT NULL,
  `Sal` int(11) DEFAULT NULL,
  `POS` varchar(1) DEFAULT NULL,
  `Team` varchar(3) DEFAULT NULL,
  `Team_Name` varchar(11) DEFAULT NULL,
  `Injury_Status` varchar(1) DEFAULT NULL,
  `Type_Injury` varchar(1) DEFAULT NULL,
  `RvP` int(11) DEFAULT NULL,
  `PR` int(11) DEFAULT NULL,
  `PPG` decimal(5,2) DEFAULT NULL,
  `Total_Opp` decimal(6,2) DEFAULT NULL,
  `PPK` decimal(6,2) DEFAULT NULL,
  `Expected_Wins` decimal(6,2) DEFAULT NULL,
  `Path_Expectation` decimal(6,2) DEFAULT NULL,
  `O_U` decimal(7,2) DEFAULT NULL,
  `ML` decimal(6,2) DEFAULT NULL,
  `SL` decimal(6,2) DEFAULT NULL,
  `Ending_ML` varchar(9) DEFAULT NULL,
  `Line_Change` varchar(8) DEFAULT NULL,
  `Sal_Change` bit(1) DEFAULT NULL,
  `PRating` decimal(6,2) DEFAULT NULL,
  `CriteriaScore` decimal(6,2) DEFAULT NULL,
  `CritRank` decimal(6,2) DEFAULT NULL,
  `FPS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataK`
--

LOCK TABLES `NFLDataK` WRITE;
/*!40000 ALTER TABLE `NFLDataK` DISABLE KEYS */;
INSERT INTO `NFLDataK` VALUES (1,'Mason Crosby',4700,'K','GB','Green Bay',NULL,NULL,29,2,8.27,4.27,1.94,0.58,0.59,48.00,0.83,0.81,'(215.00)','30.00','\0',6.53,6.44,1.00,9),(1,'Chris Boswell',4600,'K','PIT','Pittsburgh',NULL,NULL,11,7,10.50,4.92,2.14,0.66,0.57,50.00,0.49,0.50,'(145.00)','(40.00)','\0',6.00,5.81,2.00,9),(1,'Matt Bryant',4500,'K','ATL','Atlanta',NULL,NULL,30,6,7.40,4.40,1.68,0.49,0.56,47.50,0.44,0.22,'(135.00)','(35.00)','\0',6.06,5.76,3.00,10),(1,'Blair Walsh',4700,'K','MIN','Minnesota',NULL,NULL,16,10,9.56,4.75,2.01,0.61,0.65,41.00,0.49,0.33,'(145.00)','(25.00)','\0',5.92,5.71,4.00,16),(1,'Stephen Gostkowski',5000,'K','NE','New England',NULL,NULL,19,8,10.69,5.50,1.94,0.72,0.48,47.00,0.27,0.82,'280.00','(30.00)','\0',5.99,5.59,5.00,14);
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
  `Player` varchar(18) DEFAULT NULL,
  `Sal` int(11) DEFAULT NULL,
  `POS` varchar(2) DEFAULT NULL,
  `Team` varchar(3) DEFAULT NULL,
  `Team_Name` varchar(11) DEFAULT NULL,
  `ID` varchar(20) DEFAULT NULL,
  `Injury_Status` varchar(1) DEFAULT NULL,
  `Type_Injury` varchar(1) DEFAULT NULL,
  `RvP` int(11) DEFAULT NULL,
  `PR` int(11) DEFAULT NULL,
  `OPP_DEF_RANK` decimal(5,2) DEFAULT NULL,
  `FPPG` decimal(11,8) DEFAULT NULL,
  `PassAttempt_Game` decimal(7,2) DEFAULT NULL,
  `RUSHAtt_Game` decimal(6,2) DEFAULT NULL,
  `TotalOpp` decimal(7,2) DEFAULT NULL,
  `PPA` decimal(6,2) DEFAULT NULL,
  `DOVA` decimal(5,3) DEFAULT NULL,
  `Expected_Wins` varchar(6) DEFAULT NULL,
  `Path_Expectation` varchar(6) DEFAULT NULL,
  `O_U` decimal(7,2) DEFAULT NULL,
  `ML` varchar(3) DEFAULT NULL,
  `SL` varchar(3) DEFAULT NULL,
  `Ending_ML` varchar(9) DEFAULT NULL,
  `Line_Change` varchar(8) DEFAULT NULL,
  `Sal_Change` bit(1) DEFAULT NULL,
  `OL_RANK` decimal(4,2) DEFAULT NULL,
  `Prating` decimal(4,2) DEFAULT NULL,
  `CriteriaScore` decimal(4,2) DEFAULT NULL,
  `CritRank` int(11) DEFAULT NULL,
  `FPS` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataQB`
--

LOCK TABLES `NFLDataQB` WRITE;
/*!40000 ALTER TABLE `NFLDataQB` DISABLE KEYS */;
INSERT INTO `NFLDataQB` VALUES (1,'Russell Wilson',8500,'QB','SEA','Seattle','1-Russell Wilson',NULL,NULL,18,1,31.00,21.51625061,30.19,6.44,36.63,0.59,0.688,'73.14%','68.26%',44.00,'52%','29%','(550.00)','150.00','\0',4.13,9.83,7.20,1,12.92),(1,'Carson Palmer',7900,'QB','ARI','Arizona','1-Carson Palmer',NULL,NULL,13,2,28.00,20.01499939,33.63,1.56,35.19,0.57,0.480,'74.19%','51.91%',47.00,'73%','18%','(340.00)','235.00','\0',3.63,8.99,6.64,2,18.94),(1,'Derek Carr',7700,'QB','OAK','Oakland','1-Derek Carr',NULL,NULL,32,3,32.00,17.76749992,35.81,2.06,37.88,0.47,0.689,'43.76%','52.08%',51.00,'42%','63%','120.00','(15.00)','\0',3.13,8.79,6.53,3,22.36),(1,'Aaron Rodgers',9000,'QB','GB','Green Bay','1-Aaron Rodgers',NULL,NULL,28,7,22.00,19.32749939,35.75,3.63,39.38,0.49,0.406,'57.63%','59.05%',48.00,'83%','81%','(215.00)','30.00','\0',2.00,8.08,6.30,4,23.56),(1,'Matthew Stafford',7400,'QB','DET','Detroit','1-Matthew Stafford',NULL,NULL,21,10,23.00,18.95499992,37.00,2.75,39.75,0.48,0.227,'43.53%','52.65%',50.50,'25%','72%','140.00','70.00','\0',2.13,7.58,6.09,5,26.10),(1,'Drew Brees',8700,'QB','NO','New Orleans','1-Drew Brees',NULL,NULL,22,6,27.00,21.01333415,41.80,1.60,43.40,0.48,0.360,'40.87%','47.92%',51.00,'58%','37%','(140.00)','15.00','\0',3.13,8.13,6.00,6,31.42),(1,'Ben Roethlisberger',8500,'QB','PIT','Pittsburgh','1-Ben Roethlisberger',NULL,NULL,23,4,30.00,20.34333293,39.08,1.25,40.33,0.50,0.455,'66.15%','57.37%',50.00,'49%','50%','(145.00)','(40.00)','\0',3.63,8.38,5.84,7,22.80),(1,'Tyrod Taylor',7200,'QB','BUF','Buffalo','1-Tyrod Taylor',NULL,NULL,24,5,24.00,19.79285758,27.14,7.43,34.57,0.57,0.404,'53.34%','57.58%',44.50,'41%','66%','140.00','(15.00)','\0',3.63,8.15,5.70,8,5.54),(1,'Kirk Cousins',7800,'QB','WAS','Washington','1-Kirk Cousins',NULL,NULL,19,14,21.00,19.02750015,33.94,1.63,35.56,0.54,0.371,'51.48%','42.63%',50.00,'51%','50%','125.00','35.00','\0',2.13,7.37,5.64,9,11.96),(1,'Jameis Winston',7500,'QB','TB','Tampa Bay','1-Jameis Winston',NULL,NULL,9,12,26.00,18.12375069,33.44,3.38,36.81,0.49,0.292,'38.45%','44.38%',47.50,'56%','78%','115.00','35.00','\0',3.88,7.44,5.33,10,26.54);
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
  `Player` varchar(17) DEFAULT NULL,
  `Sal` int(11) DEFAULT NULL,
  `POS` varchar(2) DEFAULT NULL,
  `Team` varchar(3) DEFAULT NULL,
  `Team_Name` varchar(11) DEFAULT NULL,
  `ID` varchar(19) DEFAULT NULL,
  `Injury_Status` varchar(1) DEFAULT NULL,
  `Type_Injury` varchar(19) DEFAULT NULL,
  `Spread` decimal(4,1) DEFAULT NULL,
  `RVP` int(11) DEFAULT NULL,
  `PR` int(11) DEFAULT NULL,
  `PPG` decimal(11,9) DEFAULT NULL,
  `RUSHAtt_Game` decimal(7,2) DEFAULT NULL,
  `Rec_Targ` decimal(6,2) DEFAULT NULL,
  `TotalOpp` decimal(7,2) DEFAULT NULL,
  `PPA` decimal(6,2) DEFAULT NULL,
  `R_DOVA` varchar(7) DEFAULT NULL,
  `Expected_Wins` decimal(6,2) DEFAULT NULL,
  `Path_Expectation` decimal(6,2) DEFAULT NULL,
  `O_U` decimal(7,2) DEFAULT NULL,
  `ML` decimal(6,2) DEFAULT NULL,
  `SL` decimal(6,2) DEFAULT NULL,
  `Ending_ML` varchar(9) DEFAULT NULL,
  `Line_Change` varchar(9) DEFAULT NULL,
  `Sal_Change` bit(1) DEFAULT NULL,
  `PRating` decimal(6,2) DEFAULT NULL,
  `Snap_Count` decimal(6,2) DEFAULT NULL,
  `OFL_RATING` decimal(6,2) DEFAULT NULL,
  `CriteriaScore` decimal(6,2) DEFAULT NULL,
  `CritRank` decimal(7,2) DEFAULT NULL,
  `FPS` decimal(4,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataRB`
--

LOCK TABLES `NFLDataRB` WRITE;
/*!40000 ALTER TABLE `NFLDataRB` DISABLE KEYS */;
INSERT INTO `NFLDataRB` VALUES (1,'Todd Gurley',8900,'RB','LA','Los Angeles','1-Todd Gurley',NULL,NULL,-2.5,31,4,15.223076450,17.62,1.62,19.23,0.79,'(0.12)',0.40,0.59,43.50,0.59,0.54,'(140.00)','15.00','\0',4.53,0.48,2.50,6.56,1.00,4.7),(1,'Adrian Peterson',8200,'RB','MIN','Minnesota','1-Adrian Peterson',NULL,NULL,-2.0,6,5,15.356249810,20.44,1.88,22.31,0.69,'(0.04)',0.61,0.65,41.00,0.49,0.33,'(145.00)','(25.00)','\0',4.49,0.65,4.38,5.98,2.00,3.1),(1,'Doug Martin',7200,'RB','TB','Tampa Bay','1-Doug Martin',NULL,NULL,3.0,26,6,13.487500190,18.00,2.06,20.06,0.67,'(0.10)',0.38,0.44,47.50,0.56,0.78,'115.00','35.00','\0',4.41,0.57,3.88,5.97,3.00,12.1),(1,'Lamar Miller',7600,'RB','HOU','Houston','1-Lamar Miller',NULL,NULL,-6.0,23,21,13.024999620,12.13,2.94,15.06,0.86,'(0.12)',0.55,0.57,44.00,0.62,0.43,'(215.00)','(10.00)','\0',3.67,0.61,2.25,5.76,4.00,13.7),(1,'Latavius Murray',6600,'RB','OAK','Oakland','1-Latavius Murray',NULL,NULL,1.0,30,16,11.518750190,16.69,2.56,19.25,0.60,'(0.18)',0.44,0.52,51.00,0.42,0.63,'120.00','(15.00)','\0',3.95,0.64,3.13,5.70,5.00,13.7),(1,'DeAngelo Williams',7100,'RB','PIT','Pittsburgh','1-DeAngelo Williams','S','Backup Starting',-3.0,18,9,13.212499620,3.69,0.94,12.50,1.06,'0.02',0.66,0.57,50.00,0.49,0.50,'(145.00)','(40.00)','\0',4.18,0.65,3.63,5.68,6.00,32.1),(1,'Mark Ingram',7300,'RB','NO','New Orleans','1-Mark Ingram',NULL,NULL,-1.0,19,24,14.866666160,13.75,4.17,17.92,0.83,'(0.19)',0.41,0.48,51.00,0.58,0.37,'(140.00)','15.00','\0',3.39,0.46,3.13,5.21,7.00,9.7),(1,'Spencer Ware',5400,'RB','KC','Kansas City','1-Spencer Ware','S','Backup not starting',-7.0,28,1,8.866667006,12.50,2.50,15.00,0.59,'0.18',0.69,0.66,44.50,0.35,0.50,'(280.00)','(100.00)','\0',5.69,0.16,4.13,5.03,8.00,29.4),(1,'Devonta Freeman',8100,'RB','ATL','Atlanta','1-Devonta Freeman',NULL,NULL,-3.0,14,40,18.659999590,17.60,4.87,22.47,0.83,'(0.32)',0.49,0.56,47.50,0.44,0.22,'(135.00)','(35.00)','\0',2.74,0.67,2.88,5.00,9.00,6.0),(1,'LeSean McCoy',6900,'RB','BUF','Buffalo','1-LeSean McCoy',NULL,NULL,3.0,8,10,13.558333080,16.92,2.67,19.58,0.69,'(0.06)',0.53,0.58,44.50,0.41,0.66,'140.00','(15.00)','\0',4.10,0.56,3.63,4.83,10.00,15.0);
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
  `Player` varchar(17) DEFAULT NULL,
  `Sal` int(11) DEFAULT NULL,
  `POS` varchar(2) DEFAULT NULL,
  `Team` varchar(3) DEFAULT NULL,
  `Team_Name` varchar(11) DEFAULT NULL,
  `ID` varchar(19) DEFAULT NULL,
  `Injury_Status` varchar(1) DEFAULT NULL,
  `Type_Injury` varchar(1) DEFAULT NULL,
  `Spread` decimal(4,1) DEFAULT NULL,
  `QB_Score` decimal(4,2) DEFAULT NULL,
  `RvP` int(11) DEFAULT NULL,
  `PR` int(11) DEFAULT NULL,
  `PPG` decimal(5,2) DEFAULT NULL,
  `RUSHAtt_Game` decimal(4,2) DEFAULT NULL,
  `Rec_Targ` decimal(6,2) DEFAULT NULL,
  `Recs` decimal(6,2) DEFAULT NULL,
  `Total_Opp` decimal(6,2) DEFAULT NULL,
  `PPA` decimal(6,2) DEFAULT NULL,
  `P_DOVA` decimal(6,2) DEFAULT NULL,
  `Expected_Wins` decimal(6,2) DEFAULT NULL,
  `Path_Expectation` decimal(6,2) DEFAULT NULL,
  `O_U` decimal(7,2) DEFAULT NULL,
  `ML` decimal(6,2) DEFAULT NULL,
  `SL` decimal(6,2) DEFAULT NULL,
  `Ending_ML` varchar(9) DEFAULT NULL,
  `Line_Change` varchar(8) DEFAULT NULL,
  `Sal_Change` bit(1) DEFAULT NULL,
  `Snap_Count` decimal(5,3) DEFAULT NULL,
  `PRating` decimal(4,2) DEFAULT NULL,
  `CriteriaScore` decimal(7,2) DEFAULT NULL,
  `CritRank` int(11) DEFAULT NULL,
  `FPS` decimal(3,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataTE`
--

LOCK TABLES `NFLDataTE` WRITE;
/*!40000 ALTER TABLE `NFLDataTE` DISABLE KEYS */;
INSERT INTO `NFLDataTE` VALUES (1,'Jordan Reed',7400,'TE','WAS','Washington','1-Jordan Reed',NULL,NULL,3.0,7.37,28,1,14.34,0.00,8.14,6.21,8.14,1.76,0.37,0.51,0.43,50.00,0.51,0.50,'125.00','35.00','\0',0.656,8.82,12.13,1,9.9),(1,'Coby Fleener',5400,'TE','NO','New Orleans','1-Coby Fleener',NULL,NULL,-1.0,8.13,13,15,6.41,0.00,5.60,3.60,5.60,1.14,0.36,0.41,0.48,51.00,0.58,0.37,'(140.00)','15.00','\0',0.666,6.91,9.88,2,1.1),(1,'Richard Rodgers',4800,'TE','GB','Green Bay','1-Richard Rodgers',NULL,NULL,-5.5,8.08,16,5,8.19,0.06,5.31,3.63,5.38,1.54,0.41,0.58,0.59,48.00,0.83,0.81,'(215.00)','30.00','\0',0.697,7.54,9.32,3,2.7),(1,'Charles Clay',5000,'TE','BUF','Buffalo','1-Charles Clay',NULL,NULL,3.0,8.15,29,3,7.41,0.00,6.00,3.92,6.00,1.23,0.40,0.53,0.58,44.50,0.41,0.66,'140.00','(15.00)','\0',0.710,7.68,8.87,4,5.0),(1,'Martellus Bennett',5100,'TE','NE','New England','1-Martellus Bennett',NULL,NULL,6.0,3.67,7,24,8.04,0.00,7.27,4.82,7.27,1.11,0.26,0.72,0.48,47.00,0.27,0.82,'280.00','(30.00)','\0',0.670,6.47,8.55,5,2.9);
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
  `Player` varchar(17) DEFAULT NULL,
  `Sal` int(11) DEFAULT NULL,
  `POS` varchar(2) DEFAULT NULL,
  `Team` varchar(3) DEFAULT NULL,
  `Team_Name` varchar(11) DEFAULT NULL,
  `ID` varchar(19) DEFAULT NULL,
  `Injury_Status` varchar(1) DEFAULT NULL,
  `Type_Injury` varchar(5) DEFAULT NULL,
  `Spread` decimal(5,1) DEFAULT NULL,
  `QB_Score` decimal(4,2) DEFAULT NULL,
  `RvP` int(11) DEFAULT NULL,
  `PR` int(11) DEFAULT NULL,
  `PPG` decimal(5,2) DEFAULT NULL,
  `RUSHAtt_Game` decimal(4,2) DEFAULT NULL,
  `Rec_Targ` decimal(7,2) DEFAULT NULL,
  `Recs` decimal(6,2) DEFAULT NULL,
  `Total_Opp` decimal(7,2) DEFAULT NULL,
  `PPA` decimal(6,2) DEFAULT NULL,
  `P_DOVA` decimal(6,2) DEFAULT NULL,
  `Expected_Wins` decimal(6,2) DEFAULT NULL,
  `Path_Expectation` decimal(6,2) DEFAULT NULL,
  `O_U` decimal(7,2) DEFAULT NULL,
  `ML` decimal(6,2) DEFAULT NULL,
  `SL` decimal(6,2) DEFAULT NULL,
  `Ending_ML` varchar(9) DEFAULT NULL,
  `Line_Change` varchar(8) DEFAULT NULL,
  `Sal_Change` bit(1) DEFAULT NULL,
  `Snap_Count` decimal(5,3) DEFAULT NULL,
  `PRating` decimal(11,9) DEFAULT NULL,
  `CriteriaScore` decimal(5,2) DEFAULT NULL,
  `CritRank` int(11) DEFAULT NULL,
  `FPS` decimal(4,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NFLDataWR`
--

LOCK TABLES `NFLDataWR` WRITE;
/*!40000 ALTER TABLE `NFLDataWR` DISABLE KEYS */;
INSERT INTO `NFLDataWR` VALUES (1,'Antonio Brown',9300,'WR','PIT','Pittsburgh','1-Antonio Brown',NULL,NULL,-3.0,8.38,30,1,20.01,0.19,12.06,8.50,12.25,1.66,0.46,0.66,0.57,50.00,0.49,0.50,'(145.00)','(40.00)','\0',0.958,8.146948036,12.65,1,28.6),(1,'Larry Fitzgerald',7200,'WR','ARI','Arizona','1-Larry Fitzgerald',NULL,'Knee',-6.0,8.99,20,2,14.13,0.00,9.13,6.81,9.13,1.55,0.48,0.74,0.52,47.00,0.73,0.18,'(340.00)','235.00','\0',0.892,8.115877858,12.56,2,24.1),(1,'Julio Jones',9000,'WR','ATL','Atlanta','1-Julio Jones',NULL,'Ankle',-3.0,7.37,25,4,19.19,0.00,12.69,8.50,12.69,1.51,0.23,0.49,0.56,47.50,0.44,0.22,'(135.00)','(35.00)','\0',0.851,7.503232058,11.65,3,14.6),(1,'Amari Cooper',7100,'WR','OAK','Oakland','1-Amari Cooper',NULL,NULL,1.0,8.79,26,6,11.04,0.19,8.13,4.50,8.31,1.36,0.69,0.44,0.52,51.00,0.42,0.63,'120.00','(15.00)','\0',0.856,7.243362554,11.64,4,18.7),(1,'Michael Crabtree',6100,'WR','OAK','Oakland','1-Michael Crabtree',NULL,NULL,1.0,8.79,26,5,11.79,0.00,9.13,5.31,9.13,1.29,0.69,0.44,0.52,51.00,0.42,0.63,'120.00','(15.00)','\0',0.767,7.497163294,11.60,5,14.2),(1,'Doug Baldwin',6700,'WR','SEA','Seattle','1-Doug Baldwin',NULL,NULL,-10.5,9.83,18,3,14.37,0.00,6.44,4.88,6.44,2.23,0.69,0.73,0.68,44.00,0.52,0.29,'(550.00)','150.00','\0',0.739,7.716783010,11.44,6,19.7),(1,'Michael Floyd',6900,'WR','ARI','Arizona','1-Michael Floyd',NULL,NULL,-6.0,8.99,20,8,9.79,0.00,5.93,3.47,5.93,1.65,0.48,0.74,0.52,47.00,0.73,0.18,'(340.00)','235.00','\0',0.592,7.096249343,11.32,7,7.6),(1,'Golden Tate',6900,'WR','DET','Detroit','1-Golden Tate',NULL,'ANKLE',3.5,7.58,27,10,10.27,0.38,8.06,5.63,8.44,1.27,0.23,0.44,0.53,50.50,0.25,0.72,'140.00','70.00','\0',0.857,6.832576697,11.31,8,7.8),(1,'Randall Cobb',7200,'WR','GB','Green Bay','1-Randall Cobb',NULL,NULL,-5.5,8.08,16,11,10.59,0.81,8.06,4.94,8.88,1.31,0.41,0.58,0.59,48.00,0.83,0.81,'(215.00)','30.00','\0',0.915,6.792212063,11.11,9,9.8),(1,'Odell Beckham Jr.',9100,'WR','NYG','NY Giants','1-Odell Beckham Jr.',NULL,NULL,0.0,7.17,9,17,18.09,0.07,10.53,6.40,10.60,1.72,0.20,0.47,0.56,46.00,0.67,0.49,'(120.00)','40.00','\0',0.896,6.560470886,10.97,10,9.3),(1,'Brandin Cooks',7600,'WR','NO','New Orleans','1-Brandin Cooks',NULL,NULL,-1.0,8.13,13,18,13.23,0.50,8.06,5.25,8.56,1.64,0.36,0.41,0.48,51.00,0.58,0.37,'(140.00)','15.00','\0',0.828,6.354828012,10.65,11,30.4),(1,'Marvin Jones Jr.',5500,'WR','DET','Detroit','1-Marvin Jones Jr.',NULL,NULL,3.5,7.58,27,20,8.84,0.31,6.44,4.06,6.75,1.37,0.23,0.44,0.53,50.50,0.25,0.72,'140.00','70.00','\0',0.854,6.319020426,10.62,12,10.5),(1,'Pierre Garcon',6300,'WR','WAS','Washington','1-Pierre Garcon',NULL,NULL,3.0,7.37,28,22,9.36,0.00,6.94,4.50,6.94,1.35,0.37,0.51,0.43,50.00,0.51,0.50,'125.00','35.00','\0',0.757,6.298336370,10.35,13,8.1),(1,'A.J. Green',8200,'WR','CIN','Cincinnati','1-A.J. Green','P','Knee',-2.5,7.68,19,15,14.42,0.00,8.25,5.38,8.25,1.75,0.47,0.73,0.56,41.50,0.75,0.48,'(125.00)','10.00','\0',0.883,6.618807540,9.98,14,30.0),(1,'Sammy Watkins',7300,'WR','BUF','Buffalo','1-Sammy Watkins',NULL,NULL,3.0,8.15,29,16,14.52,0.08,7.38,4.62,7.46,1.97,0.40,0.53,0.58,44.50,0.41,0.66,'140.00','(15.00)','\0',0.665,6.611473114,9.74,15,6.3);
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

-- Dump completed on 2016-09-28 21:35:04
