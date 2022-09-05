CREATE DATABASE foods; 

\c foods; 
    
CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    originalname TEXT, 
    name TEXT, 
    price INT,  
    location text, 
    image TEXT,
    ingredients text);

 CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    foods_id INTEGER REFERENCES food (id)
    ON DELETE CASCADE);