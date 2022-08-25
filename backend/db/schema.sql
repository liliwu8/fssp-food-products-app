CREATE DATABASE foods; 

\c foods; 

CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    orginal name TEXT, 
    name TEXT, 
    price INT, 
    continent TEXT, 
    city text, 
    country text,
    image TEXT,
    description text);