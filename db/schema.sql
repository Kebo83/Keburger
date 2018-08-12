DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE  burgers_db;
Create table burgers (
	id Int( 50 ) AUTO_INCREMENT NOT NULL,
    burger_name  VARCHAR( 255 ) NOT NULL,
    devoured boolean Default false ,
	PRIMARY KEY ( id )
);