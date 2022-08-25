const db = require('../db/dbConfig.js')

//Index
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any('SELECT * FROM snacks')
    return allSnacks
  } catch (error) {
    return error
  }
}

//Individual
const getSnack = async (id) => {
  try {
    const snack = await db.any('SELECT * FROM snacks WHERE id=$1', id)
    return snack
  } catch (error) {
    return error
  }
}

//Create
const createSnack = async (snack) => {
  const { name, fiber, protein, added_sugar, image } = snack
  try {
    const newSnack = await db.one(
      'insert into snacks (name, fiber, protein, added_sugar, is_healthy, image) values ($1, $2, $3, $4, $5, $6) returning *',
      [
        getFormattedName(name),
        fiber,
        protein,
        added_sugar,
        isHealthy(fiber, protein, added_sugar),
        isValidUrl(image) ||
          'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image',
      ]
    )
    return newSnack
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

//Update
const updateSnack = async (id, snack) => {
  try {
    const updateASnack = await db.one(
      'update snacks set name= $1, fiber=$2, protein=$3, added_sugar=$4, is_healthy = $5, image =$6 where id = $7 returning * ',
      [
        getFormattedName(snack.name),
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        isHealthy(snack.fiber, snack.protein, snack.added_sugar),
        isValidUrl(snack.image) ||
          'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image',
        id,
      ]
    )
    return updateASnack
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

//Delete
const deleteSnack = async (id) => {
  try {
    const oneSnack = await db.one(
      'DELETE FROM snacks WHERE id=$1 RETURNING *',
      id
    )
    return oneSnack
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

module.exports = {
  getAllSnacks,
  getSnack,
  deleteSnack,
  updateSnack,
  createSnack,
}
