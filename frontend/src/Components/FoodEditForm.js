import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

function FoodEditForm() {
  const navigate = useNavigate()
  const { id } = useParams()
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

  useEffect(() => {
    axios
      .get(`${API}/foods/${id}`)
      .then((res) => {
        setFood(res.data.payload)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const handleTextChange = (event) => {
    setFood({ ...food, [event.target.id]: event.target.value })
  }
  const handleNumChange = (event) => {
    setFood({ ...food, [event.target.id]: Number(event.target.value) })
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
          value={food.originalname}
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
          value={food.name}
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
          value={food.price}
          type='number'
          placeholder='amount'
          onChange={handleNumChange}
          required
        />
        <br />
        <br />
        <label htmlFor='continent'>Continent</label>
        <br />
        <input
          id='continent'
          name='continent'
          value={food.continent}
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
          value={food.city}
          onChange={handleTextChange}
          type='text'
          placeholder='city'
          required
        />
        <br />
        <br />
        <label htmlFor='country'>Country</label>
        <br />
        <input
          id='country'
          name='country'
          value={food.country}
          onChange={handleTextChange}
          type='text'
          placeholder='country'
          required
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
        />
        <br />
        <br />
        <input type='submit' value='EDIT NEW DISH' className='button' />
      </form>
      <br />
      <Link to={`/foods`}>
        <button>Back</button>
      </Link>
    </div>
  )
}

export default FoodEditForm
