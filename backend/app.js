//Dependencies
const express = require('express')
const cors = require('cors')
const foodController = require('./controllers/foodController')
const reviewsController = require('./controllers/reviewController')

//Configuration
const app = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use('/foods', foodController)
app.use('/reviews', reviewsController)

//Routes
app.get('/', (req, res) => {
  res.status(200).send('Welcome International Food E-commerce!')
})

app.use(
  ('*',
  (req, res) => {
    res.status(404).send('This are not the food you are looking for')
  })
)

module.exports = app
