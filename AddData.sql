USE Dyreportalen2;
GO

DELETE FROM ads
DELETE FROM adtypes
DELETE FROM races
DELETE FROM Categories

INSERT INTO Categories
VALUES ('Hunde'),
('Katte')

INSERT INTO Races (RaceName, category_Category_id)
VALUES
('Fransk Bulldog', (SELECT category_id from Categories where Category_Name = 'Hunde')),
('Puddel', (SELECT category_id from Categories where Category_Name = 'Hunde')),
('Siameser',(SELECT category_id from Categories where Category_Name = 'Katte'))

INSERT INTO AdTypes
VALUES ('Køb'),('Salg'),('Udlejning')

INSERT INTO Ads (Created, Title, Text, City, ImageUrl, adType_AdType_id, category_Category_id, race_Race_id)
VALUES(GETDATE(), 'Fransk bulldog til salg', 'TEXT TEXT TEXT', 'Ballerup', 'https://desktop.github.com/images/desktop-icon.svg'
, (SELECT adtype_id from AdTypes where AdTypeName = 'Salg'), 
(SELECT category_id from Categories where Category_Name = 'Hunde'), 
(SELECT race_id from races where RaceName = 'Fransk Bulldog'))