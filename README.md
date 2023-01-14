# world cuisine
Ecommerce where you can order your dishes around the world and ship to your door. 

<!-- # Sign in and Login 
[https://user-images.githubusercontent.com/96275694/212498600-57bfbc81-3a70-4ce9-80e2-b9ab2c8dcf44.mp4](https://user-images.githubusercontent.com/96275694/212498600-57bfbc81-3a70-4ce9-80e2-b9ab2c8dcf44.mp4)

# Add To Your Cart
[https://user-images.githubusercontent.com/96275694/212498687-ee9473e5-a71b-448c-a42a-2b601e14048f.mp4
](https://user-images.githubusercontent.com/96275694/212498687-ee9473e5-a71b-448c-a42a-2b601e14048f.mp4)


# Adding,Editing,and Delete Your Reviews
[https://user-images.githubusercontent.com/96275694/212498687-ee9473e5-a71b-448c-a42a-2b601e14048f.mp4
](https://user-images.githubusercontent.com/96275694/212498719-560c95e5-56e7-449f-98c2-4e0cd60528e0.mp4) -->




## Important Links

- [Deployed API Server](https://world-cuisine.adaptable.app/)
- [Deployed Frontend](https://world-cuisines.netlify.app/)
- [Trello Board](https://trello.com/b/foR4yAWN/food-around-the-world)
- [ERD](https://miro.com/welcomeonboard/SVd6WEJqb096VGs2Tk82ZllhRGN5RWp6MmxyQlJYTEZPb0J4ZWtCQk9hVXZac1VWajlVelpsMzFIaUxTTXBTeXwzNDU4NzY0NTE2MDA0NTYyMTU0?share_link_id=777480915680)
- [Wireframes](https://wireframe.cc/omtocH)

## Local Setup

If you'd like to run my project locally, please read the followig steps:

## Frontend Setup

```
#clone this repository to your machine
git clone https://github.com/liliwu8/fssp-food-products-app.git

#navigate to the frontend directory
cd fssp-food-products-app/frontend

#create a .env file 
touch .env

#inside the .env file enter these data and save (you need to register a firebase account)
# https://firebase.google.com/
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_API_URL=http://localhost:3333


#npm install in frontend 
npm install

#start frontend server
npm start
```

## Backend Setup

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
