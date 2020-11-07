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

-- INSERT INTO burgers (first_name, last_name, role_id, manager_id) 
-- VALUES 
-- 	('John', 'Jackson', 1, null), 
--     ('Philip', 'Hover', 4, 1), 
--     ('Bill', 'Realies', 6, 1), 
--     ('Omar', 'Mohammed', 2, 1), 
--     ('Louis', 'Troullion', 2, 1),
-- 	('Peter', 'Nguyen', 3, 4),
--     ('Laura', 'John-Jackson', 7, null),
--     ('Billy', 'Bobby', 8, 7)
-- ;

SELECT * FROM burgers;