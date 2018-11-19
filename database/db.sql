-- creating the database
CREATE DATABASE crudnode;

-- using the database
use crudnode;

-- creating a table
CREATE TABLE cliente(
    id INT(6) UNSINGED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- Show all tables
SHOW TABLES;

-- to describe the table
describe cliente