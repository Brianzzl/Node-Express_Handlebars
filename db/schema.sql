-- Drops burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;
-- Create database burgers_db and use
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE table burgers(
  id INT auto_increment,
  burger_name varchar(50),
  devoured boolean default false,
  primary key (id)
);

