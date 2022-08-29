const db = require('../db/dbConfig.js')
const { isValidUrl } = require('../Vaildation/foodValidation')

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
  const { originalname, name, price, location, image, ingredients } = food
  try {
    const newfood = await db.one(
      'insert into food (originalname, name, price, location, ingredients, image) values ($1, $2, $3, $4, $5, $6) returning *',
      [
        originalname,
        name,
        price,
        location,
        ingredients,
        isValidUrl(image) ||
          'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image',
      ]
    )
    return newfood
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

//Update
const updateFood = async (id, food) => {
  const { originalname, name, price, location, ingredients, image } = food
  try {
    const updatesFood = await db.one(
      'update food set originalname=$1, name=$2, price=$3, location=$4, ingredients=$5, image=$6 where id = $7 returning * ',
      [
        originalname,
        name,
        price,
        location,
        ingredients,
        isValidUrl(image) ||
          'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image',
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
    const oneFood = await db.one('DELETE FROM food WHERE id=$1 RETURNING *', id)
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
