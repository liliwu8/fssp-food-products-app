CREATE DATABASE foods; 

\c foods; 

CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    orginalname TEXT, 
    name TEXT, 
    price INT, 
    continent TEXT, 
    city text, 
    country text,
    image TEXT,
    description text);