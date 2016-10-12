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
  `fantasyimpact` varchar(255) NOT NULL,
  `fantasyinfo` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`fantasyid`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FantasyNews`
--

LOCK TABLES `FantasyNews` WRITE;
/*!40000 ALTER TABLE `FantasyNews` DISABLE KEYS */;
INSERT INTO `FantasyNews` VALUES (1,'\r\n            Julio Jones (knee, shin) was limited in Wednesday\'s practice.\r\n        ','\r\n             Both the knee and shin issues are new after Jones battled calf and ankle ailments earlier in the season.  None of it is expected to cost Jones his Week 6 availability in a tough test with the Seahawks\' secondary.\r\n        ','Oct 12 - 3:44 PM','2016-10-12 19:47:27'),(2,'\r\n            Austin Seferian-Jenkins (ankle) did not practice Wednesday.\r\n        ','\r\n             With Eric Decker (shoulder) officially done for the season, Seferian-Jenkins is expected to take on more work, but he can\'t do it from the trainer\'s table.\r\n        ','Oct 12 - 3:39 PM','2016-10-12 19:47:27'),(3,'\r\n            Jonathan Stewart (hamstring) is practicing on Wednesday.\r\n        ','\r\n             After missing the previous three games with a strained hammy, Stewart is expected to resume lead-back duties against the Saints.  He\'ll be an RB2/flex play.\r\n        ','Oct 12 - 3:36 PM','2016-10-12 19:47:27'),(4,'\r\n            Cody Kessler (ribs) was limited in Wednesday\'s practice.\r\n        ','\r\n             He and Josh McCown (collarbone) were both limited.  Kessler is expected to start Sunday against the Titans, though he admits it still hurts to throw.\r\n        ','Oct 12 - 3:28 PM','2016-10-12 19:47:27'),(5,'\r\n            Gary Barnidge (forearm, hip) was limited in Wednesday\'s practice.\r\n        ','\r\n             He should be fine for Week 6 against the Titans.  Barnidge\'s targets have risen each week since seeing just two in Week 1.  He\'s a borderline TE1/2.\r\n        ','Oct 12 - 3:27 PM','2016-10-12 19:47:27'),(6,'\r\n            Josh McCown (collarbone) was limited in Wednesday\'s practice.\r\n        ','\r\n             It\'s his first on-field action since breaking his collarbone in Week 2.  He was initially given a 2-4 week timetable.  Onlookers said McCown looked good throwing the ball Wednesday, but taking hits is a whole different thing.  Cody Kessler ','Oct 12 - 3:18 PM','2016-10-12 19:47:27'),(7,'\r\n            Virgil Green (calf) has been removed from the injury report and will play Week 6 against the Chargers.\r\n        ','\r\n             The Chargers are allowing the 10th-most fantasy points to tight ends this season, but Green is a weak streamer who missed the previous three games.\r\n        ','Oct 12 - 3:16 PM','2016-10-12 19:47:27'),(8,'\r\n            Trevor Siemian (shoulder) is officially questionable for Thursday night\'s Week 6 game against the Chargers.\r\n        ','\r\n             It\'s already been reported that Siemian will make the start, especially after rookie Paxton Lynch was atrocious in last week\'s loss to the Falcons.  Siemian will be nothing more than a mid-range QB2, even in a good matchup.\r\n        ','Oct 12 - 3:12 PM','2016-10-12 19:47:27'),(9,'\r\n            Coach Jay Gruden said DeSean Jackson needs and deserve the ball more.\r\n        ','\r\n             After posting a 6-102 line on eight targets in Week 1, Jackson\'s targets have been way down from 5 to 6 to 1 to 5 over the past four weeks.  He\'s been held to 40 yards or fewer in 3-of-5 games.  Jackson acknowledged on Wednesday that Kirk C','Oct 12 - 3:06 PM','2016-10-12 19:47:27'),(10,'\r\n            Jordan Reed did not practice Wednesday and is being evaluated for a concussion.\r\n        ','\r\n             Redskins beat writers were left wondering why Reed wasn\'t at practice Wednesday, and this gives us our answer.  Reed has a long history of concussions, having suffered five of them from 2011-2015 dating back to his days at Florida.  Reed ca','Oct 12 - 2:53 PM','2016-10-12 19:47:27'),(11,'\r\n            Eddie Royal (calf) did not practice Wednesday.\r\n        ','\r\n             Royal missed the entire practice week last week before ultimately playing against the Colts.  He caught seven passes in the loss and should be able to give it a go at home this week against the Jaguars.\r\n        ','Oct 12 - 2:33 PM','2016-10-12 19:47:27'),(12,'\r\n            Zach Miller (ribs) did not practice Wednesday.\r\n        ','\r\n             Miller followed this routine last week, missing practicing on Wednesday.  He should be back Thursday.  Miller looked like his normal self, posting a 7-73 line in Week 5.  He\'ll again be back on the TE1 map against the Jaguars.\r\n        ','Oct 12 - 2:32 PM','2016-10-12 19:47:27'),(13,'\r\n            Jay Cutler (thumb) did not practice Wednesday.\r\n        ','\r\n             Brian Hoyer is going to start against the Jaguars and has QB1 upside.\r\n        ','Oct 12 - 2:30 PM','2016-10-12 19:47:27'),(14,'\r\n            Cam Newton (concussion) is practicing Wednesday.\r\n        ','\r\n             As expected.  If Newton is able to avoid setbacks with his concussion, he should have no problem getting cleared for Sunday\'s shootout with the Saints.\r\n        ','Oct 12 - 2:29 PM','2016-10-12 19:47:27'),(15,'\r\n            Jamaal Charles is practicing in full for Week 6 against the Raiders.\r\n        ','\r\n             Asked if he feels 100 percent, Charles said he\'s \"110 percent\" healthy coming out of the bye.  When asked if Charles would be more active than he was in his Week 4 debut, coach Andy Reid said, \"As long as there are no setbacks, he\'ll probab','Oct 12 - 2:13 PM','2016-10-12 19:47:27'),(76,'\r\n            A.J. Green (calf) did not practice Wednesday.\r\n        ','\r\n             Green was present at practice, but didn\'t do anything besides hang out in sweatpants.  It sounded like more of a maintenance day than anything.  Check back on Thursday, but expect Green to play Week 6 against the Patriots.\r\n        ','Oct 12 - 3:54 PM','2016-10-12 19:58:58'),(77,'\r\n            Will Fuller (hamstring) was limited in Wednesday\'s practice.\r\n        ','\r\n             Fuller should be fine for Sunday night\'s showdown with the Colts.  Indianapolis remains banged up and bad in the secondary, making Fuller a high-upside WR3 play coming off a one-catch Week 5 against the Vikings.\r\n        ','Oct 12 - 3:46 PM','2016-10-12 19:58:58'),(121,'\r\n            Eli Rogers (toe) is practicing in full for Week 6 against the Dolphins.\r\n        ','\r\n             Rogers hasn\'t played since developing a case of turf toe in Week 3.  Starting the week off with a full practice puts him well on track to man the slot Sunday.\r\n        ','Oct 12 - 4:01 PM','2016-10-12 20:08:44'),(122,'\r\n            C.J. Uzomah (ankle) was limited in Wednesday\'s practice.\r\n        ','\r\n             He should be good to go for Week 6 at New England.  Uzomah\'s involvement in the passing game depends on Tyler Eifert\'s (back) availability for Sunday.  If Eifert sits, Uzomah will be on the streaming radar.\r\n        ','Oct 12 - 3:58 PM','2016-10-12 20:08:44');
/*!40000 ALTER TABLE `FantasyNews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FantasyNewsNBA`
--

DROP TABLE IF EXISTS `FantasyNewsNBA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FantasyNewsNBA` (
  `fantasyid` int(11) NOT NULL AUTO_INCREMENT,
  `fantasynews` varchar(255) NOT NULL,
  `fantasyimpact` varchar(255) NOT NULL,
  `fantasyinfo` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`fantasyid`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FantasyNewsNBA`
--

LOCK TABLES `FantasyNewsNBA` WRITE;
/*!40000 ALTER TABLE `FantasyNewsNBA` DISABLE KEYS */;
INSERT INTO `FantasyNewsNBA` VALUES (1,'\r\n            Kelly Olynyk (shoulder) will be re-evaluated in New York City later this week.\r\n        ','\r\n             He\'s missed some preseason action due to his shoulder surgery from May. Olynyk could get minutes next to Horford and also play some center himself, but it\'s tough to trust any non-Horford big on the Celtics. That\'s especially true with Jae ','Oct 12 - 3:45 PM','2016-10-12 19:47:27'),(2,'\r\n            Paul George (illness) is considered doubtful to play on Wednesday.\r\n        ','\r\n             The story hasn\'t changed since the Pacers reported George was doubtful back on Tuesday. With their star likely out, we should see Glenn Robinson III start while there is more Monta Ellis and Jeff Teague.\r\n        ','Oct 12 - 3:42 PM','2016-10-12 19:47:27'),(3,'\r\n            Lakers waive G Zach Auguste, G Julian Jacobs, and F Travis Wear.\r\n        ','\r\n             If Auguste does go to the D-League, he has a $60K guarantee from the Lakers. The Lakers are down to 17 on their roster.\r\n        ','Oct 12 - 3:18 PM','2016-10-12 19:47:27'),(4,'\r\n            Paul Pierce said that he will retire as a Celtic at the conclusion of the 2016-17 season.\r\n        ','\r\n             Pierce will go on his retirement tour with the Clippers, and then will likely be traded for nothing to the Celtics over the summer in order to end his career with the team that drafted him. The Truth is The Truth won\'t have any fantasy valu','Oct 12 - 3:12 PM','2016-10-12 19:47:27'),(5,'\r\n            The Heat reportedly won\'t waive Chris Bosh (blood clots) until after March 1 to ensure that his entire salary is off the books for free agency in 2017.\r\n        ','\r\n             If this is the situation that plays out, Bosh would be ineligible to play during the postseason, and Miami would guarantee that he plays less than 25 games. In other words, Bosh isn\'t worth drafting anywhere.\r\n        ','Oct 12 - 2:58 PM','2016-10-12 19:47:27'),(6,'\r\n            Billy Donovan confirmed that Steven Adams tweaked his ankle during a game of 3-on-3 Wednesday.\r\n        ','\r\n             \"I don’t think it’s anything too severe, at least that’s the first impression,\" said Donovan. \"But, again, we’ve been kinda evaluating him each day to see where he’s at so I’m sure by tomorrow we’ll find out more before we leave and go to T','Oct 12 - 2:44 PM','2016-10-12 19:47:27'),(7,'\r\n            Markieff Morris (foot) did some work at practice on Wednesday.\r\n        ','\r\n             He did not go through a full practice, though. Morris has dealt with his sore foot and missed the last two preseason games. He should be good to go for the regular season and has been durable for most of his career, so this injury shouldn\'t','Oct 12 - 2:29 PM','2016-10-12 19:47:27'),(8,'\r\n            Cody Zeller (right knee bone bruise) has been cleared for contact.\r\n        ','\r\n             Zeller was present during Wednesday morning\'s practice, but it\'s unclear exactly how much he participated. Still, this is a very positive report, and with a little under two weeks to go before opening night, Zeller should have enough time t','Oct 12 - 2:22 PM','2016-10-12 19:47:27'),(9,'\r\n            Ronnie Price has been diagnosed with a concussion.\r\n        ','\r\n             It\'s unclear exactly when Price suffered the injury, but he won\'t be allowed to return to the court until he clears the league mandated concussion protocol testing. With both Price and Cameron Payne (foot) going down, Semaj Christon should ','Oct 12 - 2:21 PM','2016-10-12 19:47:27'),(10,'\r\n            Denzel Valentine is showing improvement with his sprained left ankle, although he\'s still not practicing with the team.\r\n        ','\r\n             Valentine\'s status for Monday\'s preseason game against the Hornets remains uncertain, but either way, he\'s only looking at a limited role with the Bulls to begin the year and won\'t be worth drafting in most formats.\r\n        ','Oct 12 - 2:18 PM','2016-10-12 19:47:27'),(11,'\r\n            Trey Burke (ankle) participated during Wednesday\'s practice.\r\n        ','\r\n             Burke sat out Monday\'s preseason loss to the Knicks, but he should be able to get back out there for Thursday\'s preseason matchup with the 76ers. However, as John Wall\'s backup, Burke won\'t be worth drafting in most leagues.\r\n        ','Oct 12 - 2:10 PM','2016-10-12 19:47:27'),(12,'\r\n            Joakim Noah (hamstring) went through a full practice on Wednesday and said he\'s \"excited\" to suit up for Saturday\'s preseason game against the Celtics.\r\n        ','\r\n             Noah took a hard fall during Wednesday\'s scrimmage, but played through it, and looks to be on track to make his preseason debut on Saturday. The 31-year-old carries some obvious injury risk, but he\'s an intriguing late-round prospect as New','Oct 12 - 2:07 PM','2016-10-12 19:47:27'),(13,'\r\n            Tony Snell (left ankle) will be re-evaluated in one week.\r\n        ','\r\n             Snell won\'t be able to any on-court work for the next week, and his absence could potentially extend into the regular season. Snell won\'t have any fantasy value while the Bulls are at full strength.\r\n        ','Oct 12 - 1:59 PM','2016-10-12 19:47:27'),(14,'\r\n            Paul Millsap (illness) did not participate during Wednesday\'s practice.\r\n        ','\r\n             It\'s important to note that Millsap\'s absence from Wednesday\'s practice is due to an illness, and not his knee. Millsap was a full participant during Tuesday\'s practice, and he said his knee responded well to the increased workload, so he\'s','Oct 12 - 1:56 PM','2016-10-12 19:47:27'),(15,'\r\n            Steven Adams may have tweaked his sprained right ankle during Wednesday\'s practice.\r\n        ','\r\n             According to Thunder beat writer Erik Horne, Adams went up for a put back dunk in a game of 3-on-3, and when he came down he immediately walked off the court \"upset.\" There\'s nothing definitive here, but we should have another update soon. ','Oct 12 - 1:52 PM','2016-10-12 19:47:27');
/*!40000 ALTER TABLE `FantasyNewsNBA` ENABLE KEYS */;
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

-- Dump completed on 2016-10-12 16:49:59
