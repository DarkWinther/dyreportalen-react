USE Dyreportalen2;
GO

DELETE FROM ads
DELETE FROM adtypes
DELETE FROM races
DELETE FROM Categories
Delete from users

INSERT INTO Categories
VALUES ('Hunde'),
('Katte'),
('Fisk'),
('Gnavere'),
('Fugle'),
('Padder')

INSERT INTO Races (RaceName, category_Category_id)
VALUES
('Fransk Bulldog', (SELECT category_id from Categories where Category_Name = 'Hunde')),
('Puddel', (SELECT category_id from Categories where Category_Name = 'Hunde')),
('Siameser',(SELECT category_id from Categories where Category_Name = 'Katte')),
('Norsk Skovkat', (SELECT category_id from Categories where Category_Name = 'Katte')),
('Delfin', (SELECT category_id FROM Categories where Category_Name = 'Fisk')),
('Sibirisk Dværghamster', (SELECT category_id FROM Categories where Category_Name = 'Gnavere')),
('Hvidhovedet Havørn ', (SELECT category_id FROM Categories where Category_Name = 'Fugle')),
('Land skilpadde', (SELECT category_id FROM Categories where Category_Name = 'Padder'))

INSERT INTO AdTypes
VALUES ('Køb'),('Salg'),('Udlejning')

INSERT INTO Users (FirstName, LastName, Address, City, ZipCode, Email, Password, PhoneNumber)
VALUES 
('Svend', 'Larsen', 'Telegrafvej 9', 'Ballerup', 2840, 'tec@tec.dk', 'VerySecurePassword123', 88888888),
('Inge', 'Lise', 'Kattevej 6', 'Næstved', 4200, 'tec@tec.dk', 'VerySecurePassword123', 11111111),
('Mr', 'Shady', 'Gangstervej 23', 'Nowhere', 0000, 'secret@mafia.dk', 'VerySecurePassword123', 12345678)

INSERT INTO Ads (Created, Title, Text, City, ImageUrl, Price, adType_AdType_id, category_Category_id, race_Race_id, user_user_id)
VALUES(GETDATE(), 'Fransk bulldog til salg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a commodo justo. Praesent sit amet.', 'Ballerup', 'https://www.zooplus.dk/magasin/CACHE_IMAGES/768/content/uploads/2017/03/fotolia_131738235.jpg', 7500
, (SELECT adtype_id from AdTypes where AdTypeName = 'Salg'), 
(SELECT category_id from Categories where Category_Name = 'Hunde'), 
(SELECT race_id from races where RaceName = 'Fransk Bulldog'),
(SELECT user_id from Users where FirstName = 'Svend')),

(2017-10-10, 'Sød kat til udlejning', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a commodo justo. Praesent sit amet.', 'Næstved', 'https://www.zooplus.dk/magasin/CACHE_IMAGES/768/content/uploads/2019/01/Norsk-skovkat-med-gr%C3%A5-baggrund.jpg', 250
, (SELECT adtype_id from AdTypes where AdTypeName = 'Udlejning'), 
(SELECT category_id from Categories where Category_Name = 'Katte'), 
(SELECT race_id from races where RaceName = 'Norsk Skovkat'),
(SELECT user_id from Users where FirstName = 'Inge')),

(GETDATE(), 'Delfin til sjov svømning', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a commodo justo. Praesent sit amet.', 'Nowhere', 'https://cdn.pixabay.com/photo/2018/10/07/17/04/dolphin-3730702_960_720.jpg', 48299
, (SELECT adtype_id from AdTypes where AdTypeName = 'Salg'), 
(SELECT category_id from Categories where Category_Name = 'Fisk'), 
(SELECT race_id from races where RaceName = 'Delfin'),
(SELECT user_id from Users where FirstName = 'Mr')),

(GETDATE(), 'Sød hamster til slangefodder', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a commodo justo. Praesent sit amet.', 'Slagelse', 'https://www.idenyt.dk/globalassets/denmark/kaledyr-2/hamster/hamster-mad.jpg', 20
, (SELECT adtype_id from AdTypes where AdTypeName = 'Salg'), 
(SELECT category_id from Categories where Category_Name = 'Gnavere'), 
(SELECT race_id from races where RaceName = 'Sibirisk Dværghamster'),
(SELECT user_id from Users where FirstName = 'Inge')),

(GETDATE(), 'Søger skaldet frihedsørn', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a commodo justo. Praesent sit amet.', 'København', 'https://upload.wikimedia.org/wikipedia/commons/1/1a/About_to_Launch_%2826075320352%29.jpg', 75000
, (SELECT adtype_id from AdTypes where AdTypeName = 'Køb'), 
(SELECT category_id from Categories where Category_Name = 'Fugle'), 
(SELECT race_id from races where RaceName = 'Hvidhovedet Havørn'),
(SELECT user_id from Users where FirstName = 'Mr')),

(GETDATE(), 'Dårligt gående skildpadde sælges', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a commodo justo. Praesent sit amet.', 'København', 'https://cdn.pixabay.com/photo/2016/12/21/17/25/turtle-1923406_960_720.jpg', 5152.25
, (SELECT adtype_id from AdTypes where AdTypeName = 'Salg'), 
(SELECT category_id from Categories where Category_Name = 'Padder'), 
(SELECT race_id from races where RaceName = 'Land skildpadde'),
(SELECT user_id from Users where FirstName = 'Svend'))
