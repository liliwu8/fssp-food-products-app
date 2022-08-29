CREATE DATABASE foods; 

\c foods; 

CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    originalname TEXT, 
    name TEXT, 
    price INT, 
    continent TEXT, 
    city text, 
    country text,
    image TEXT,
    ingredients text);