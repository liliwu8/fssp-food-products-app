\c foods; 

INSERT INTO food (originalname,  name, price, location, image, ingredients) VALUES
('Burger', 'Burger', 70, 'New York, USA','https://media.timeout.com/images/105887006/1372/1029/image.jpg', 'Beef, burger bun, onion, ketchup, tomato, lettuce' ),
('Al Pastor Taco', 'Shepherd Style Tacos', 200, 'Tijuana, Mexico','https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/08/ari-helminen.jpg', 'pork adobada meat grilled from a spit, served on a corn tortilla with onion, cilantro, salsa, and pineapple slices'),
('Ceviche', 'Ceviche', 500, 'Lima, Peru', 'https://migrationology.com/wp-content/uploads/2019/07/P1855178.jpeg', 'fish, octopus, lime juice, salt, pepper'),
('Açaí na tigela',  'Açaí Bowl', 200, 'Rio de Janeiro, Brazil', 'https://vejario.abril.com.br/wp-content/uploads/2016/11/amazonia-soul_reproducao-instagram.png?quality=70&strip=info&resize=850,567', 'Banana,	Coconut Water, Açaí Pulp, guarana syrup, Granola,'),
('Paella de mariscos', 'seafood paella', 1000, 'Barcelona, Spain', 'https://www.eatperu.com/wp-content/uploads/2020/06/authentic-peru-ceviche-with-onion-sweet-potato.jpg', 'bomba Rice, shrimps, mussels, clams, squid, olive oil, saffron, peppers
'),
('Parfait', 'Parfait', 1100, 'Paris, France', 'https://cdn.tasteatlas.com/images/dishrestaurants/b67dd262e0654a10814d4401ce69cfb9.jpg?mw=1300', 'egg yolks, sugar, and whipped cream, fruits'),
('Tonkotsu Ramen', 'Pork bone ramen', 1200, 'Miyazaki, Japan', 'https://static.wixstatic.com/media/1815be_308e4da713124cb699a6ebd5818b2ba1~mv2.jpg/v1/fill/w_1480,h_986,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1815be_308e4da713124cb699a6ebd5818b2ba1~mv2.jpg', 'pork bones, the thick and rich broth is kelp, niboshi fish, veggies and shrimp soy sauce'),
('Har gow', 'Shrimp Dumpling', 500, 'Hong Kong, China', 'https://media-cdn.tripadvisor.com/media/photo-s/13/a6/2b/b4/crystal-shrimp-dumpling.jpg', 'Shrimps, bamboo shoots, pork fat, cornstarch, lard, white pepper, salt, sugar'),
('Lamington', 'Lamington', 600, 'Victoria, Australia', 'https://cdn.tasteatlas.com/Images/DishRestaurants/f367bc43f2014009a3fc6fddd2ef137f.jpg?mw=1300', 'Coconut, chocolate, flour, eggs, sugar, butter milk'),
('Chicken Tajine', 'Chicken Tajine', 700,  'Marrakesh, Morocco', 'https://cdn.tasteatlas.com/images/dishes/ae34fe326cd440caabba424b59a0c679.jpg?mw=1300', 'Chicken, carrot potatoes, onions, onion, olives, apricot, almonds, saffron'),
('Jollof Rice', 'Jollof Rice', 400, 'Nigeria, Africa', 'https://cdn.tasteatlas.com/Images/DishRestaurants/d0a8662e6d00445688cb0aa73aea0eda.jpg?mw=1300', 'spicy tomato sauce, with onion, meat, vegetables, pepper, and other seasonings');

INSERT INTO reviews (foods_id, reviewer, title, content, rating )
VALUES
('1', 'Evan', 'My Least Favorite', 'this is ok', 3),
('2', 'Evan', 'My Least Favorite', 'this is average', 3),
('3', 'Evan', 'My Favorite', 'love it', 5),
('2', 'Juliana', 'I Love Going Here', 'finally ate here', 5),
('2', 'David', 'not good', 'disappointing', 1),
('2', 'Mr. Mingo', 'average', 'I got some to try it but its meh', 3),
('2', 'Alison', 'A lifesaver!','the best place to eat', 4),
('3', 'Hannah', 'Delish', 'came here and waited for hours', 4),
('3', 'Gabi', 'The best resturant', 'Gets a discount if I cam again great place to eat', 5);