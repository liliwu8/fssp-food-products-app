const db = require('../db/dbConfig')

// GET ALL
const getAllReviews = async (foods_id) => {
  try {
    const allReviews = await db.any(
      `SELECT * FROM reviews WHERE foods_id = ${foods_id}`
    )
    return allReviews
  } catch (error) {
    return error
  }
}

//create
const createReview = async (
  foods_id,
  { reviewer, content, rating }
) => {
  try {
    const newReview = await db.one(
      'INSERT INTO reviews (reviewer, content, rating, foods_id) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [reviewer, title, content, rating, foods_id]
    )
    return newReview
  } catch (error) {
    return error
  }
}

//individual
const getReview = async (id) => {
  try {
    const oneReview = await db.one('SELECT * FROM reviews WHERE id=$1', id)
    return oneReview
  } catch (error) {
    return error
  }
}

//delete
const deleteReview = async (id) => {
  try {
    const oneReview = await db.one(
      'DELETE FROM reviews WHERE id=$1 RETURNING *',
      id
    )
    return oneReview
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

//update
const updateReview = async (
  id,
  foods_id,
  { reviewer, content, rating }
) => {
  try {
    const updateReview = await db.one(
      'UPDATE reviews SET reviewer=$1, content=$2, rating=$3, foods_id=$4 where id=$5 RETURNING *',
      [reviewer, content, rating, foods_id, id]
    )
    return updateReview
  } catch (error) {
    console.log(error.message || error)
    return error
  }
}

module.exports = {
  getAllReviews,
  createReview,
  deleteReview,
  getReview,
  updateReview,
}
