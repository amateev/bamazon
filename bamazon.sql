-- Create a MySQL Database called `bamazon`.
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR (255) NOT NULL,
	department_name VARCHAR (255) NOT NULL,
	price INT NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ('The Gruffalo book', 'books for kids', 7, 20);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("The Gruffalo's child book", 'books for kids', 7, 20);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ('The Gruffalo DVD', 'DVDs for kids', 20, 10);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("The Gruffalo's child DVD", 'DVDs for kids', 20, 10);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ('The Gruffalo t-shirt', 'cloths for kids', 10, 15);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("The Gruffalo's child t-shirt", 'cloths for kids', 10, 15);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ('The Gruffalo audio-book', 'audio-books for kids', 10, 5);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("The Gruffalo's child audio-book", 'audio-books for kids', 10, 5);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ('The Gruffalo toy', 'toys for kids', 20, 7);
INSERT into products (product_name, department_name, price, stock_quantity)
VALUES ("The Gruffalo's child toy", 'toys for kids', 20, 7);

-- Selecting a row
SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id=1;