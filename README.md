# world cuisine
Ecommerce like shop where you can get your dishes around the world.


## Important Links

- [Deployed API Server](https://fast-beach-94136.herokuapp.com/)
- [Deployed Frontend](https://world-cuisines.netlify.app/)
- [Trello Board](https://trello.com/b/foR4yAWN/food-around-the-world)
- [ERD](https://miro.com/welcomeonboard/SVd6WEJqb096VGs2Tk82ZllhRGN5RWp6MmxyQlJYTEZPb0J4ZWtCQk9hVXZac1VWajlVelpsMzFIaUxTTXBTeXwzNDU4NzY0NTE2MDA0NTYyMTU0?share_link_id=777480915680)
- [Wireframes](https://wireframe.cc/omtocH)

## Local Setup

If you'd like to run my project locally, please read the followig steps:

### Frontend Setup

```
#clone this repository to your machine
git clone https://github.com/liliwu8/fssp-food-products-app.git

#navigate to the frontend directory
cd fssp-food-products-app/frontend

#create a .env file 
REACT_APP_API_URL=http://localhost:3333

#npm install in frontend 
npm install

#start frontend server
npm start
```

### Backend Setup

```
# navigate to backend directory 
cd fssp-food-products-app/backend

# create .env file 
touch .env

# inside .env file copy and save
PORT = 3333
PG_HOST = localhost
PG_PORT = 5432
PG_DATABASE = foods
PG_USER = postgres

#npm install in backend folder
npm install

# initialize and seed the database
npm run db:init
npm run db:seed

#start backend server
npm start or nodemon server.js
```

##Acknowledgments
Icon design, [Jossy Pascasio](https://github.com/named-josie).