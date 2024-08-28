CREATE DATABASE products;
USE products;

CREATE TABLE product(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nameP VARCHAR(250) NOT NULL,
    descriptionP TEXT,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO product(nameP, descriptionP, price)
VALUES('Café Premium', 'Café arábica de alta calidad, tostado artesanalmente.', 12000),
('Auriculares Inalámbricos', 'Auriculares con cancelación de ruido y batería de larga duración.', 50000),
('Agenda 2024', 'Agenda anual con diseño minimalista y secciones organizativas.', 20000),
('Botella Térmica', 'Botella de acero inoxidable que mantiene bebidas frías o calientes por 12 horas.', 30000);

SELECT * FROM product;