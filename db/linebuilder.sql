"drop table LINEUP;
drop table GFY;
drop table PG1;
drop table PG2;
drop table SG1;
drop table SG2;
drop table SF1;
drop table SF2;
drop table PF1;
drop table PF2;
drop table C;"

"create temporary table GFY
as
SELECT *
FROM googlesheetsapi
WHERE Player <> '' AND SalaryAdjust BETWEEN -580 AND 800 AND RecPr < 25 AND ProjMins >= 21 AND Useage >= .1;"

"create temporary table PG1
as
SELECT *
FROM GFY
WHERE Position = 'PG' AND CriteriaRanking >=4 AND Salary >= 6200
ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

"create temporary table PG2
as
SELECT *
FROM GFY
WHERE Position = 'PG' AND CriteriaRanking >=4 AND Salary BETWEEN 3700 AND 7000
ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

"create temporary table SG1
as
SELECT *
FROM GFY
WHERE Position = 'SG' AND CriteriaRanking >=4 AND Salary >= 6200
ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

"create temporary table SG2
as
SELECT *
FROM GFY
WHERE Position = 'SG' AND CriteriaRanking >=4 AND Salary BETWEEN 3700 AND 7500
ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

"create temporary table SF1
as
SELECT *
FROM GFY
WHERE Position = 'SF' AND CriteriaRanking >=4 AND Salary >= 6000
ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

"create temporary table SF2
as
SELECT *
FROM GFY
WHERE Position = 'SF' AND CriteriaRanking >=4 AND Salary BETWEEN 3700 AND 7700
ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

"create temporary table PF1
as
SELECT *
FROM GFY
WHERE Position = 'PF' AND CriteriaRanking >=4 AND Salary >= 4300
ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

"create temporary table PF2
as
SELECT *
FROM GFY
WHERE Position = 'PF' AND CriteriaRanking >=4 AND Salary BETWEEN 3700 AND 7200
ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

"create temporary table C
as
SELECT *
FROM GFY
WHERE Position = 'C' AND CriteriaRanking >=4 AND Salary >= 3500
ORDER BY Salary DESC, ProjMins DESC, Useage DESC LIMIT 6;"

"create temporary table LINEUP
as
SELECT PG1.Player as 'PG1',  COUNT(PG1.Player) as 'PG1C', PG2.Player as 'PG2', COUNT(PG2.Player) as 'PG2C',"

"SG1.Player as 'SG1', COUNT(SG1.Player) as 'SG1C', SG2.Player as 'SG2', COUNT(SG2.Player) as 'SG2C',
SF1.Player as 'SF1', COUNT(SF1.Player) as 'SF1C', SF2.Player as 'SF2',  COUNT(SF2.Player) as 'SF2C',
PF1.Player as 'PF1', COUNT(PF1.Player) as 'PF1C', PF2.Player as 'PF2', COUNT(PF2.Player) as 'PF2C',
C.Player as 'C', COUNT(C.Player) as 'CC',"

"(PG1.ProjectedPts + PG2.ProjectedPts + SG1.ProjectedPts + SG2.ProjectedPts + SF1.ProjectedPts + SF2.ProjectedPts + PF1.ProjectedPts + PF2.ProjectedPts + C.ProjectedPts) as 'Total_Points',
(PG1.Salary + PG2.Salary + SG1.Salary + SG2.Salary + SF1.Salary + SF2.Salary + PF1.Salary + PF2.Salary + C.Salary) as 'Sal',"

"(PG1.ProjMins + PG2.ProjMins + SG1.ProjMins + SG2.ProjMins + SF1.ProjMins + SF2.ProjMins + PF1.ProjMins + PF2.ProjMins + C.ProjMins)/9 as 'Projected_Mins',
(PG1.Value + PG2.Value + SG1.Value + SG2.Value + SF1.Value + SF2.Value + PF1.Value + PF2.Value + C.Value)/9 as 'Value',"

"(PG1.Useage + PG2.Useage + SG1.Useage + SG2.Useage + SF1.Useage + SF2.Useage + PF1.Useage + PF2.Useage + C.Useage)/9 as 'Useage',"


"(PG1.OVP + PG2.OVP + SG1.OVP + SG2.OVP + SF1.OVP + SF2.OVP + PF1.OVP + PF2.OVP + C.OVP)/9 as 'OVP',

(PG1.GameLine + PG2.GameLine + SG1.GameLine + SG2.GameLine + SF1.GameLine + SF2.GameLine + PF1.GameLine + PF2.GameLine + C.GameLine)/9 as 'Avg_Line',"

"(PG1.CriteriaRanking + PG2.CriteriaRanking + SG1.CriteriaRanking + SG2.CriteriaRanking +
	 SF1.CriteriaRanking + SF2.CriteriaRanking + PF1.CriteriaRanking + PF2.CriteriaRanking + C.CriteriaRanking) as 'CriteriaRanking',"

"(PG1.ProjScore + PG2.ProjScore + SG1.ProjScore + SG2.ProjScore + SF1.ProjScore + SF2.ProjScore +
	 PF1.ProjScore + PF2.ProjScore + C.ProjScore)/9 as 'TotalProjScore',"

"(PG1.PTsVPos + PG2.PTsVPos + SG1.PTsVPos + SG2.PTsVPos + SF1.PTsVPos + SF2.PTsVPos + PF1.PTsVPos +
	 PF2.PTsVPos + C.PTsVPos)/9 as 'PPP',"

"PG1.Team as 'pg1team' , PG2.Team as 'pg2team' , SG1.Team as 'sg1team' , SG2.Team as 'Sg2team' ,

SF1.Team as 'sf1team', SF2.Team as 'sf2team' , PF1.Team as 'pf1team' , PF2.Team as 'pf2team' , C.Team as 'C1team'"

"FROM PG1, PG2, SG1, SG2, SF1, SF2, PF1, PF2, C

WHERE PG1.Salary >= PG2.Salary AND SG1.Salary >= SG2.Salary AND SF1.Salary >= SF2.Salary AND PF1.Salary >= PF2.Salary  AND
	  PG1.Player <> PG2.Player AND SG1.Player <> SG2.player AND SF1.Player <> SF2.Player AND PF1.Player <> PF2.Player AND"

"(SELECT(PG1.Salary + PG2.Salary + SG1.Salary + SG2.Salary + SF1.Salary + SF2.Salary + PF1.Salary + PF2.Salary + C.Salary)) BETWEEN 59600 AND 60000 AND
(SELECT(PG1.Useage + PG2.Useage + SG1.Useage + SG2.Useage + SF1.Useage + SF2.Useage + PF1.Useage + PF2.Useage + C.Useage)/9) >= .23 AND
(SELECT(PG1.ProjMins + PG2.ProjMins + SG1.ProjMins + SG2.ProjMins + SF1.ProjMins + SF2.ProjMins + PF1.ProjMins + PF2.ProjMins + C.ProjMins)/9)  >= 31 AND
(SELECT(PG1.CriteriaRanking + PG2.CriteriaRanking + SG1.CriteriaRanking + SG2.CriteriaRanking + SF1.CriteriaRanking + SF2.CriteriaRanking + PF1.CriteriaRanking + PF2.CriteriaRanking + C.CriteriaRanking)) BETWEEN 5 AND 56 AND
(SELECT(PG1.ProjScore + PG2.ProjScore + SG1.ProjScore + SG2.ProjScore + SF1.ProjScore + SF2.ProjScore + PF1.ProjScore +PF2.ProjScore + C.ProjScore)/9) >= 103 AND
(SELECT(PG1.PTsVPos + PG2.PTsVPos + SG1.PTsVPos + SG2.PTsVPos + SF1.PTsVPos + SF2.PTsVPos + PF1.PTsVPos +PF2.PTsVPos + C.PTsVPos)/9) >= 22 AND
(SELECT(PG1.ProjectedPts + PG2.ProjectedPts + SG1.ProjectedPts + SG2.ProjectedPts + SF1.ProjectedPts + SF2.ProjectedPts + PF1.ProjectedPts + PF2.ProjectedPts + C.ProjectedPts)) >= 240
GROUP BY"

"PG1.ProjectedPts , PG2.ProjectedPts , SG1.ProjectedPts , SG2.ProjectedPts , SF1.ProjectedPts , SF2.ProjectedPts , PF1.ProjectedPts , PF2.ProjectedPts , C.ProjectedPts,"

"PG1.CriteriaRanking , PG2.CriteriaRanking , SG1.CriteriaRanking , SG2.CriteriaRanking , SF1.CriteriaRanking , SF2.CriteriaRanking , PF1.CriteriaRanking , PF2.CriteriaRanking , C.CriteriaRanking,"

"PG1.Salary , PG2.Salary , SG1.Salary , SG2.Salary , SF1.Salary , SF2.Salary , PF1.Salary , PF2.Salary , C.Salary,"

"PG1.Player, PG2.Player, SG1.Player, SG2.Player, SF1.Player, SF2.Player, PF1.Player, PF2.Player, C.Player,"

"PG1.ProjectedPts , PG2.ProjectedPts , SG1.ProjectedPts , SG2.ProjectedPts , SF1.ProjectedPts , SF2.ProjectedPts , PF1.ProjectedPts , PF2.ProjectedPts , C.ProjectedPts,"

"PG1.Useage , PG2.Useage , SG1.Useage , SG2.Useage , SF1.Useage , SF2.Useage , PF1.Useage , PF2.Useage , C.Useage,"

"PG1.ProjMins , PG2.ProjMins , SG1.ProjMins , SG2.ProjMins , SF1.ProjMins , SF2.ProjMins , PF1.ProjMins , PF2.ProjMins , C.ProjMins,"

"PG1.Value , PG2.Value , SG1.Value , SG2.Value , SF1.Value , SF2.Value , PF1.Value , PF2.Value , C.Value,"

"PG1.Useage , PG2.Useage , SG1.Useage , SG2.Useage , SF1.Useage , SF2.Useage , PF1.Useage , PF2.Useage , C.Useage,"

"PG1.OVP , PG2.OVP , SG1.OVP , SG2.OVP , SF1.OVP , SF2.OVP , PF1.OVP , PF2.OVP , C.OVP,
PG1.GameLine , PG2.GameLine , SG1.GameLine , SG2.GameLine , SF1.GameLine , SF2.GameLine , PF1.GameLine , PF2.GameLine , C.GameLine,"

"PG1.ProjScore ,PG2.ProjScore , SG1.ProjScore , SG2.ProjScore , SF1.ProjScore , SF2.ProjScore , PF1.ProjScore , PF2.ProjScore , C.ProjScore,"

"PG1.PTsVPos ,PG2.PTsVPos , SG1.PTsVPos , SG2.PTsVPos , SF1.PTsVPos , SF2.PTsVPos , PF1.PTsVPos , PF2.PTsVPos , C.PTsVPos,"

"PG1.Team , PG2.Team , SG1.Team , SG2.Team , SF1.Team , SF2.Team , PF1.Team , PF2.Team , C.Team
ORDER BY Projected_Mins DESC, CriteriaRanking, Useage, Total_Points DESC, TotalProjScore DESC;"

"select * from LINEUP ORDER BY Total_Points desc;"
