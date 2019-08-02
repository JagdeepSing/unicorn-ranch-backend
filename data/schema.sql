DROP TABLE IF EXISTS unicorns;

CREATE TABLE unicorns (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  color VARCHAR(255),
  favorite_food VARCHAR(255),
  location VARCHAR(255)
);

INSERT INTO unicorns 
(
  name, 
  color, 
  favorite_food, 
  location
) 
VALUES 
('Aasifa', 'Pink', 'Walnuts', 'barn'), 
('Aerowen', 'Green', 'Burgers', 'pasture'), 
('Agrafena', 'Purple', 'Sapasui', 'trails'),
('Kettle', 'Red', 'Cereal', 'trails'),
('Sapasui', 'Purple', 'Sapasui', 'trails'),
('Aletha', 'Blue', 'Potato', 'trails'),
('Dog', 'Pink', 'Walnuts', 'barn'),
('Unicorn', 'Green', 'Burgers', 'pasture');