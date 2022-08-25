const db = require('../db/dbConfig.js')

//Index
const getAllFoods = async () => {
  try {
    const allfoods = await db.any('SELECT * FROM food')
    return allfoods
  } catch (error) {
    return error
  }
}

//Individual
const getFood = async (id) => {
  try {
    const food = await db.any('SELECT * FROM food WHERE id=$1', id)
    return food
  } catch (error) {
    return error
  }
}

//Create
const createFood = async (food) => {
  const {
    originalname,
    name,
    price,
    continent,
    city,
    country,
    image,
    ingredients
  } = food
  try {
    const newfood = await db.one(
      'insert into food (originalname, name, price, continent, city, country, image, ingredients) values ($1, $2, $3, $4, $5, $6, $7, $8) returning *',
      [originalname, name, price, continent, city, country, image, ingredients]
    )
    return newfood
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

//Update
const updateFood = async (id, food) => {
  const {
    originalname,
    name,
    price,
    continent,
    city,
    country,
    image,
    ingredients,
  } = food
  try {
    const updatesFood = await db.one(
      'update food set originalname=$1, name=$2, price=$3, continent=$4, city=$5, country=$6, image=$7, ingredients=$8 where id = $9 returning * ',
      [
        originalname,
        name,
        price,
        continent,
        city,
        country,
        image,
        ingredients,
        id,
      ]
    )
    return updatesFood
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

//Delete
const deleteFood = async (id) => {
  try {
    const oneFood = await db.one(
      'DELETE FROM food WHERE id=$1 RETURNING *',
      id
    )
    return oneFood
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

module.exports = {
  getAllFoods,
  getFood,
  deleteFood,
  updateFood,
  createFood,
}
