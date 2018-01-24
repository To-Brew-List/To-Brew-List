DROP DATABASE IF EXISTS user_database;
CREATE DATABASE user_database;
USE user_database;

CREATE TABLE login (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (username)
);