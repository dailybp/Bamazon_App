--Drops the bamazon database if it already exists--
DROP DATABASE IF EXISTS bamazon;
--creates a new bamazon database--
CREATE DATABASE bamazon;
--Makes all of the following code affect the bamazon database--
USE bamazon;

--creates the table products in the bamazon database--
CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
	price DECIMAL (10,2),
	stock_quantity INT DEFAULT 0,
	PRIMARY KEY (item_id)
);

SELECT * from products;
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES(),
