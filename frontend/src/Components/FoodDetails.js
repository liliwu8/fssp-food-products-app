import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
const API = process.env.REACT_APP_API_URL

function FoodDetails() {
  const [food, setFood] = useState([])
  const { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API}/foods/${id}`)
      .then((res) => {
        setFood(res.data.payload)
      })
      .catch(() => {
        navigate('/not-found')
      })
  }, [id, navigate])

  const handleDelete = () => {
    axios
      .delete(`${API}/foods/${id}`)
      .then((res) => {
        setFood(res.data.payload)
        navigate('/foods')
      })
      .catch((err) => {
        console.warn(err)
      })
  }

  return (
    <article>
      <img src={food.image} alt='dishpic' width='200px' height='120px' />
      <p>Original Name: {food.originalname}</p>
      <p>Name: {food.name}</p>
      <p>Price ${food.price}</p>
      <p>City:{food.city}</p>
      <p>Country:{food.country}</p>
      <p>Continent: {food.continent}</p>
      <p>Ingredients: {food.ingredients}</p>
      <Link to={`/foods`}>
        <button>Back</button>
      </Link>
      <Link to={`/foods/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </article>
  )
}

export default FoodDetails
