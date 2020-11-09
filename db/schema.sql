DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER auto_increment PRIMARY KEY NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL
);
