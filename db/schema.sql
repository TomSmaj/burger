CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INTEGER not null AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(50),
    devoured BOOLEAN
);