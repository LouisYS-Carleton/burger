USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES 
	('The Big Boi', false),
	('Spinach Patty', true), 
	('Baconator', true), 
	('Good ol Burger', false), 
	('Mushroom Patty', false), 
	('Chipotle Heat', true), 
	('Quarter Pounder', true), 
	('Ring of Onion Burger', true)
;

SELECT * FROM burgers;