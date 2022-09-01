const express = require('express')
const reviews = express.Router({ mergeParams: true })
const {
  getAllReviews,
  getReview,
  deleteReview,
  createReview,
  updateReview,
} = require('../queries/review')

//index
reviews.get('/', async (req, res) => {
  const { foods_id } = req.params
  const allReviews = await getAllReviews(foods_id)
  if (allReviews[0]) {
    res.status(200).json(allReviews)
  } else {
    res.status(500).json({ error: 'server error' })
  }
})

//individual
reviews.get('/:id', async (req, res) => {
  const { id } = req.params
  const review = await getReview(id)
  if (review) {
    res.json(review)
  } else {
    res.status(404).json({ error: 'not found' })
  }
})

// Create
reviews.post('/', async (req, res) => {
  try {
    const review = await createReview(req.params.foods_id, req.body)
    res.json(review)
  } catch (error) {
    res.status(400).json({ error: error })
  }
})

// UPDATE
reviews.put('/:id', async (req, res) => {
  try {
    const review = await updateReview(
      req.params.id,
      req.params.foods_id,
      req.body
    )
    res.json(review)
  } catch (error) {
    res.status(400).json({ error: error })
  }
})

//DELETE
reviews.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedReview = await deleteReview(id)
  if (deletedReview) {
    if (deletedReview.id) {
      res.status(200).json(deleteReview)
    } else {
      res.status(404).json({ error: 'food not found' })
    }
  } else {
    res.status(500).json({ error: 'server error' })
  }
})

module.exports = reviews
