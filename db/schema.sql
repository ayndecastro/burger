### Schema
DROP DATABASE IF EXISTS heroku_8f04cb480ff2a47;
CREATE DATABASE heroku_8f04cb480ff2a47;
USE heroku_8f04cb480ff2a47;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Double Bacon Cheeseburger', false),
('Steak Burger', false),('Cheeseburger', false),
('Veggie Burger', true),('Brisket Burger', true)