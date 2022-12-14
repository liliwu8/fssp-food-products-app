import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const API = process.env.REACT_APP_API_URL

function NewFoodForm({ locate }) {
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
  const handleNumChange = (event) => {
    setFood({ ...food, [event.target.id]: Number(event.target.value) })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(`${API}/foods/new`, food)
      .then(() => {
        navigate('/foods')
      })
      .catch((err) => {
        console.warn(err)
      })
  }

  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='image'>Image:</label>
        <br />
        <input
          id='image'
          type='text'
          name='image'
          placeholder='http://'
          value={food.image}
          onChange={handleTextChange}
          className='h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
        />
        <br />
        <br />
        <label htmlFor='original-name'> Original Name</label>
        <br />
        <input
          id='originalname'
          name='originalname'
          value={food.originalname}
          type='text'
          onChange={handleTextChange}
          placeholder='Orginal Name'
          required
          className='h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
        />
        <br />
        <br />
        <label htmlFor='Name'>Name</label>
        <br />
        <input
          id='name'
          name='name'
          value={food.name}
          type='text'
          placeholder='name'
          onChange={handleTextChange}
          required
          className='h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
        />
        <br />
        <br />
        <label htmlFor='price'>Price</label>
        <br />
        <input
          id='price'
          name='price'
          value={food.price}
          type='number'
          placeholder='amount'
          onChange={handleNumChange}
          required
          className='h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
        />
        <br />
        <br />
        <label htmlFor='location'>Location</label>
        <br />
        <input
          id='location'
          name='location'
          value={food.location}
          onChange={handleTextChange}
          type='text'
          placeholder='location'
          required
          className='h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
        />
        <br />
        <br />
        <label htmlFor='ingredients'>Ingredients</label>
        <br />
        <input
          id='ingredients'
          name='ingredients'
          value={food.ingredients}
          onChange={handleTextChange}
          type='text'
          placeholder='ingredients'
          required
          className='h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
        />
        <br />
        <br />
        <input
          type='submit'
          value='CREATE NEW DISH'
          className='h-10 px-5 m-2 bg-[#202053] text-white hover:bg-[#4040A6] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        />
      </form>
    </div>
  )
}

export default NewFoodForm
