const express = require('express')
const foods = express.Router()
const { getAllFoods, getFood, createFood, updateFood, deleteFood} = require('../queries/food')


//Index
foods.get('/', async (req, res) => {
    const allFoods = await getAllFoods()
    
    if (allFoods) {
        res.status(200).json({payload: allFoods})
    } else {
        res.status(404).json({status: 404, error:'error'})
    }
})

//Individual
foods.get('/:id', async (req, res) => {
 const { id } = req.params
 const food = await getFood(id)
 if (food[0]) {
   res.status(200).json({ success: true, payload: food[0] })
 } else {
   res.status(404).json({ success: false, payload: 'not found' })
 }
})

//Create
foods.post('/new', async (req, res) => {
   const newFood = await createFood(req.body)
   if (newFood) {
     res.status(200).json({ success: true, payload: newFood })
   } else {
     res.status(404).send({ success: false, payload: 'not found' })
   }
})

//Update
foods.put('/:id', async (req, res) => {
   const { id } = req.params
   const updatedAFood = await updateFood(id, req.body)

   if (updatedAFood.id) {
     res.status(200).json({ payload: updatedAFood })
   } else {
     res.status(404).json('snack not found')
   }
})

//Delete
foods.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedFoods = await deleteFood(id)
  if (deletedFoods.id) {
    res.status(200).json({ success: true, payload: deletedFoods })
  } else {
    res.status(404).json({ success: false, payload: id })
  }
})

module.exports = foods
