DROP DATABASE IF EXISTS login_db;
CREATE DATABASE login_db;
USE login_db;

CREATE TABLE info (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
); 