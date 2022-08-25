import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const API = process.env.PORT

function NewFoodForm() {
  const navigate = useNavigate()
  const [food, setFood] = useState({
    originalname: '',
    name: '',
    price: 0,
    continent: '',
    city: '',
    country: '',
    image: '',
    ingredients: '',
  })

  const handleTextChange = (event) => {
    setFood({ ...food, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(`${API}/food`, food)
        .then((res) => {
            setFood(res.data)
           
        navigate('/foods')
      })
      .catch((err) => {
        console.warn(err)
      })
  }
    
  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='original-name'> Original Name</label>
        <br />
        <input
          id='originalname'
          name='originalname'
          value={food.payload.originalname}
          type='text'
          onChange={handleTextChange}
          placeholder='Orginal Name'
          required
        />
        <br />
        <br />
        <label htmlFor='Name'>Name</label>
        <br />
        <input
          id='name'
          name='name'
          value={food.payload.name}
          type='text'
          placeholder='name'
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
        <label htmlFor='price'>Price</label>
        <br />
        <input
          id='price'
          name='price'
          value={food.payload.price}
          type='number'
          placeholder='amount'
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
        <label htmlFor='continent'>Continent</label>
        <br />
        <input
          id='continent'
          name='continent'
          value={food.payload.continent}
          onChange={handleTextChange}
          type='text'
          placeholder='continent'
          required
        />
        <br />
        <br />
        <label htmlFor='city'>City</label>
        <br />
        <input
          id='city'
          name='city'
          value={food.payload.city}
          onChange={handleTextChange}
          type='text'
          placeholder='city'
          required
        />
        <br />
        <br />
        <input
          id='country'
          name='country'
          value={food.payload.country}
          onChange={handleTextChange}
          type='text'
          placeholder='country'
          required
        />
        <br />
        <br />
        <input
          id='ingredients'
          name='ingredients'
          value={food.payload.ingredients}
          onChange={handleTextChange}
          type='text'
          placeholder='ingredients'
          required
        />
        <input type='submit' value='CREATE NEW ITEM' className='button' />
      </form>
    </div>
  )
}

export default NewFoodForm
